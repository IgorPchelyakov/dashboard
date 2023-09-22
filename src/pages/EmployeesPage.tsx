import MainButton from '@/components/Buttons/MainButton';
import EmployeeCard from '@/components/EmployeeCard/EmployeeCard';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { useCurrentQuery } from '@/redux/services/auth';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeesPage: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllEmployeesQuery();
  const { data: currentUser } = useCurrentQuery();

  const isButtonVisible =
    currentUser?.role === 'Super Admin' ||
    currentUser?.role === 'Головний редактор' ||
    currentUser?.role === 'Редактор головної редакції';

  const goToAddUser = () => navigate(Paths.employeeAdd);
  return (
    <>
      <Layout>
        <div className="mx-auto flex max-w-[1200px] justify-end">
          {isButtonVisible && (
            <MainButton
              type={'primary'}
              onClick={goToAddUser}
              icon={<PlusCircleOutlined />}
            >
              Створити співробітника
            </MainButton>
          )}
        </div>
        {isLoading && <Spin />}
        {data &&
          data.map((data) => (
            <div key={data.id}>
              <EmployeeCard
                firstName={data.firstName}
                lastName={data.lastName}
                middleName={data.middleName}
                id={data.id}
                login={data.login}
                email={data.email}
                role={data.role}
                password={data.password}
                nickName={data.nickName}
                job={data.job}
                city={data.city}
                tel={data.tel}
                telegramLink={data.telegramLink}
                instagramLink={data.instagramLink}
                facebookLink={data.facebookLink}
                twitterLink={data.twitterLink}
                avatarUrl={data.avatarUrl}
                accessRights={data.accessRights}
              />
            </div>
          ))}
      </Layout>
    </>
  );
};

export default EmployeesPage;
