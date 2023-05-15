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

  const handleAddEmployee = async (data: EmployeeWithoutId) => {
    try {
      await createEmployee(data).unwrap();
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
            error={error}
          />
        </Row>
      </Layout>
    </>
  );
};

export default AddEmployeePage;
