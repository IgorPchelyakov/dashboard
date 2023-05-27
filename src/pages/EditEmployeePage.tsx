import EditEmployeeForm from '@/components/EmployeeForm/editEmployeeForm';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from '@/redux/services/employees';
import { Employee } from '@/types/user';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployeePage: FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [error, setError] = useState('');
  const { data, isLoading } = useGetEmployeeQuery(params.id || '');
  const [editEmployee] = useEditEmployeeMutation();

  const handleEditUser = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };

      await editEmployee(editedEmployee).unwrap();
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
    return <span>Loading...</span>;
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
          />
        </Row>
      </Layout>
    </>
  );
};

export default EditEmployeePage;
