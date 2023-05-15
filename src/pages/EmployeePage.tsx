import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { useRemoveEmployeeMutation } from '@/redux/services/employees';
import { useGetEmployeeQuery } from '@/redux/services/employees';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Modal } from 'antd';
import { FC, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const EmployeePage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const { data, isLoading } = useGetEmployeeQuery(params.id || '');
  const [removeEmployee] = useRemoveEmployeeMutation();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <Navigate to="/employees" />;
  }

  const showModal = () => {
    setIsOpenModal(true);
  };
  const hideModal = () => {
    setIsOpenModal(false);
  };
  const handleDeleteEmployee = async () => {
    hideModal();

    try {
      await removeEmployee(data.id).unwrap();
      navigate(`${Paths.status}/deleted`);
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
        <Card
          key={data.id}
          title={`${data.lastName} ${data.firstName} ${data.middleName}`}
          className="relative mx-auto mb-8 max-w-[1200px]"
        >
          <Button
            type={'text'}
            icon={<EditOutlined />}
            onClick={() => navigate(`${Paths.employeeEdit}/${data.id}`)}
            className="absolute right-14 top-2"
          />
          <Button
            type={'text'}
            icon={<DeleteOutlined />}
            danger
            onClick={showModal}
            className="absolute right-4 top-2"
          />
          <div className="flex w-full gap-10">
            <Avatar
              src={data.avatarUrl}
              className="max-h=[100px] h-full w-full max-w-[100px]"
            />
            <div className="mx-auto flex w-full max-w-[900px] gap-10">
              <div className="flex w-full gap-10">
                <div className="pt-6 text-gray-400">
                  <p>Псевдонім</p>
                  <p>Посада</p>
                  <p>Місто</p>
                  <p>Рівень доступу</p>
                </div>
                <Divider type={'vertical'} style={{ height: '100%' }} />
                <div className="pt-6">
                  <p>{data.nickName}</p>
                  <p>{data.job}</p>
                  <p>{data.city}</p>
                  <p>{data.role}</p>
                </div>
              </div>
              <div className="flex w-full gap-10">
                <div className="text-gray-400">
                  <p>Мобільний телефон</p>
                  <p>Електронна пошта</p>
                  <p>Телеграм</p>
                  <p>Інстаграм</p>
                  <p>Фейсбук</p>
                  <p>Твітер</p>
                </div>
                <Divider type={'vertical'} style={{ height: '100%' }} />
                <div className="">
                  <p>{data.tel}</p>
                  <p>{data.email}</p>
                  <p>{data.telegramLink}</p>
                  <p>{data.instagramLink}</p>
                  <p>{data.facebookLink}</p>
                  <p>{data.twitterLink}</p>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400">Опис співробітника</p>
              <p>{data.descUser}</p>
            </div>
            <div>
              Доступ надано: {data.accessRights === true ? 'Так' : 'Ні'}
            </div>
          </div>
        </Card>
        <ErrorMessage message={error} />
        <Modal
          title="Попередження"
          open={isModalOpen}
          onOk={handleDeleteEmployee}
          onCancel={hideModal}
          okText={'Підтвердити'}
          cancelText={'Відміна'}
        >
          Ви дійсно хочете видалити співробітника?
        </Modal>
      </Layout>
    </>
  );
};

export default EmployeePage;
