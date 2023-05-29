import Layout from '@/components/Layout/Layout';
import { FC } from 'react';

const DashboardPage: FC = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto flex items-center justify-center">
          Ласкаво просимо до Робочого столу
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
