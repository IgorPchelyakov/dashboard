import { Card, Divider, Form, Row, Space } from 'antd';
import { FC } from 'react';
import MainInput from '../Inputs/MainInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MainButton from '../Buttons/MainButton';
import { EmployeeWithoutId } from '@/types/user';
import PasswordInput from '../Inputs/PasswordInput';
import CustomSwitch from '../Switch/Switch';
import CustomSelect from '../Select/CustomSelect';
import { roles } from './options';
import CustomTextArea from '../TextArea/CustomTextArea';

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

const EmployeeForm: FC<Props<EmployeeWithoutId>> = ({
  onFinish,
  btnText,
  title,
  error,
  employee,
}) => {
  return (
    <>
      <Card title={title} style={{ maxWidth: '1200px', width: '100%' }}>
        <Form
          name="employee"
          onFinish={onFinish}
          initialValues={employee}
          layout={'vertical'}
          size={'small'}
        >
          <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Space size={'large'}>
              <MainInput
                label={'Логін'}
                type={'text'}
                name={'login'}
                required={true}
              />
              <PasswordInput
                label={'Пароль'}
                name={'password'}
                required={true}
              />
              <PasswordInput
                label={'Підтвердіть пароль'}
                name={'confirmPassword'}
                required={true}
              />
            </Space>
            <Space>
              <MainButton htmlType="submit">{btnText}</MainButton>
            </Space>
          </Row>
          <Divider />
          <div className="wrapper flex gap-9">
            <Row style={{ width: '100%', maxWidth: '200px' }}>
              <MainInput type={'text'} name={'avatarUrl'} />
            </Row>
            <Divider
              type={'vertical'}
              style={{ minHeight: '100%', height: '400px' }}
            />
            <Row
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '530px',
                width: '100%',
              }}
            >
              <MainInput
                label={'Прізвище'}
                type={'text'}
                name={'lastName'}
                required={true}
              />
              <MainInput
                label={`І'мя`}
                type={'text'}
                name={'firstName'}
                required={true}
              />
              <MainInput
                label={'По батькові'}
                type={'text'}
                name={'middleName'}
                required={true}
              />
              <MainInput
                label={'Псевдонім'}
                type={'text'}
                name={'nickName'}
                required={true}
              />
              <MainInput
                label={'Посада'}
                type={'text'}
                name={'job'}
                required={true}
              />
              <MainInput
                label={'Місто'}
                type={'text'}
                name={'city'}
                required={true}
              />
            </Row>
            <Divider
              type={'vertical'}
              style={{ minHeight: '100%', height: '400px' }}
            />
            <Row
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '450px',
                width: '100%',
              }}
            >
              <MainInput
                label={'Мобильній телефон'}
                type={'text'}
                name={'tel'}
                required={true}
              />
              <MainInput
                label={'Електронна пошта'}
                type={'text'}
                name={'email'}
                required={true}
              />
              <MainInput
                label={'Телеграм'}
                type={'text'}
                name={'telegramLink'}
              />
              <MainInput
                label={'Фейсбук'}
                type={'text'}
                name={'facebookLink'}
              />
              <MainInput
                label={'Інстаграм'}
                type={'text'}
                name={'instagramLink'}
              />
              <MainInput label={'Твітер'} type={'text'} name={'twitterLink'} />
            </Row>
          </div>
          <Divider />
          <CustomTextArea
            label={'Короткий опис співробітника'}
            name={'descUser'}
            required={true}
          />
          <CustomSelect
            label={'Рівень доступу'}
            name={'role'}
            defaultValue="Оберіть рівень доступу"
            required={true}
            options={roles}
          />
          <CustomSwitch
            label={'Забрати / Надати права доступу співробитника'}
            name={'accessRights'}
            required={true}
          />
          <Space>
            <ErrorMessage message={error} />
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default EmployeeForm;
