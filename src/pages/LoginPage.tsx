import MainButton from '@/components/Buttons/MainButton';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import MainInput from '@/components/Inputs/MainInput';
import PasswordInput from '@/components/Inputs/PasswordInput';
import { useLoginMutation } from '@/redux/services/auth';
import { UserLogin } from '@/types/user';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Card, Form, Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();
  const [error, setError] = useState('');

  const login = async (data: UserLogin) => {
    try {
      await loginUser(data).unwrap();
      navigate('/');
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
      <Row align={'middle'} justify={'center'}>
        <Card title="Login" style={{ width: '30rem' }}>
          <Form onFinish={login}>
            <MainInput type="text" name="login" placeholder="Login" />
            <PasswordInput name="password" placeholder="Password" />
            <MainButton htmlType="submit">Sign In</MainButton>
          </Form>
          <ErrorMessage message={error} />
        </Card>
      </Row>
    </>
  );
};

export default LoginPage;
