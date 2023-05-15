import MainButton from '@/components/Buttons/MainButton';
import EmployeeCard from '@/components/EmployeeCard/EmployeeCard';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import { PlusCircleOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeesPage: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllEmployeesQuery();

  const goToAddUser = () => navigate(Paths.employeeAdd);
  return (
    <>
      <Layout>
        <MainButton
          type={'primary'}
          onClick={goToAddUser}
          icon={<PlusCircleOutlined />}
        >
          Add Employee
        </MainButton>
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((data) => (
            <>
              <EmployeeCard
                key={data.id}
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
            </>
          ))}
      </Layout>
    </>
  );
};

export default EmployeesPage;
