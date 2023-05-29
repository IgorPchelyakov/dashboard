import EmployeeForm from '@/components/EmployeeForm/employeeForm';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { useCreateEmployeeMutation } from '@/redux/services/employees';
import { EmployeeWithoutId } from '@/types/user';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage: FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createEmployee] = useCreateEmployeeMutation();
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

  const handleAddEmployee = async (data: EmployeeWithoutId) => {
    try {
      const formData = new FormData();
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

      await createEmployee(formData).unwrap();
      navigate(`${Paths.status}/created`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Unknow error');
      }
    }
  };
  return (
    <>
      <Layout>
        <Row align={'middle'} justify={'center'}>
          <EmployeeForm
            title="Створити співробітника"
            btnText="Створити"
            onFinish={handleAddEmployee}
            handleAvatarChange={handleAvatarChange}
            error={error}
            avatarPreview={avatarPreview}
          />
        </Row>
      </Layout>
    </>
  );
};

export default AddEmployeePage;
