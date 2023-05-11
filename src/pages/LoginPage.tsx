import MainButton from '@/components/Buttons/MainButton';
import MainInput from '@/components/Inputs/MainInput';
import PasswordInput from '@/components/Inputs/PasswordInput';
import { Card, Form, Row } from 'antd';
import { FC } from 'react';

const LoginPage: FC = () => {
  return (
    <>
      <Row align={'middle'} justify={'center'}>
        <Card title="Login" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
            <MainInput type="text" name="login" placeholder="Login" />
            <PasswordInput name="password" placeholder="Password" />
            <MainButton htmlType="submit">Sign In</MainButton>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default LoginPage;
