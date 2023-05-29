import EditEmployeeForm from '@/components/EmployeeForm/editEmployeeForm';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from '@/redux/services/employees';
import { Employee } from '@/types/user';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row, Spin } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployeePage: FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [error, setError] = useState('');
  const { data, isLoading } = useGetEmployeeQuery(params.id || '');
  const [editEmployee] = useEditEmployeeMutation();

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAvatarFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview('');
    }
  };

  const handleEditUser = async (data: Employee) => {
    try {
      const formData = new FormData();
      formData.append('id', params.id);
      formData.append('login', data.login);
      formData.append('password', data.password);
      formData.append('confirmPassword', data.confirmPassword);
      formData.append('lastName', data.lastName);
      formData.append('firstName', data.firstName);
      formData.append('middleName', data.middleName);
      formData.append('nickName', data.nickName);
      formData.append('job', data.job);
      formData.append('city', data.city);
      formData.append('tel', data.tel);
      formData.append('email', data.email);
      formData.append('telegramLink', data.telegramLink);
      formData.append('facebookLink', data.facebookLink);
      formData.append('instagramLink', data.instagramLink);
      formData.append('twitterLink', data.twitterLink);
      formData.append('descUser', data.descUser);
      formData.append('role', data.role);
      formData.append('accessRights', data.accessRights);
      if (avatarFile) {
        formData.append('avatarFile', avatarFile);
      }

      await editEmployee(formData).unwrap();
      navigate(`${Paths.status}/updated`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Unknow error');
      }
    }
  };

  if (isLoading) {
    return <Spin />;
  }
  return (
    <>
      <Layout>
        <Row align={'middle'} justify={'center'}>
          <EditEmployeeForm
            title={'Редагувати співробітника'}
            btnText={'Зберегти'}
            error={error}
            employee={data}
            onFinish={handleEditUser}
            handleAvatarChange={handleAvatarChange}
            avatarPreview={avatarPreview}
          />
        </Row>
      </Layout>
    </>
  );
};

export default EditEmployeePage;
