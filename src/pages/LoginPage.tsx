import MainButton from '@/components/Buttons/MainButton';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import MainInput from '@/components/Inputs/MainInput';
import PasswordInput from '@/components/Inputs/PasswordInput';
import { useLoginMutation } from '@/redux/services/auth';
import { UserLogin } from '@/types/user';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Card, Form, Image, Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/icons/DAYCOM LOGOTIP.svg';
import WM from '../assets/images/icons/Водяний знак відео.svg';

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
      <Row
        align={'middle'}
        justify={'center'}
        className="flex h-[100vh] translate-y-[-7%] flex-col"
      >
        <Image src={logo} alt={'logo'} preview={false} className="mb-5" />
        <p className="mb-1">РОБОЧИЙ СТІЛ</p>
        <p className="mb-5 font-extralight">HEAD & REGIONAL OFFICE</p>
        <Card
          title="Авторизація"
          style={{ width: '30rem' }}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="mb-5 w-full font-extralight">WORK TABLE</p>
            <Form
              onFinish={login}
              className="flex w-full flex-col justify-center"
            >
              <MainInput type="text" name="login" placeholder="Логін" />
              <PasswordInput name="password" placeholder="Пароль" />
              <div className="flex justify-center">
                <MainButton htmlType="submit">Увійти</MainButton>
              </div>
            </Form>
            <ErrorMessage message={error} />
          </div>
        </Card>
        <p className="mb-4 mt-5 font-extralight">
          Copyright © Work Table Daycom. Всі права захищено.
        </p>
        <Image src={WM} alt={'Water-mark'} preview={false} />
      </Row>
    </>
  );
};

export default LoginPage;
