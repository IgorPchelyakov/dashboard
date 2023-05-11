import MainButton from '@/components/Buttons/MainButton';
import { Paths } from '@/paths';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <>
      <Layout.Header className="mb-5 flex items-center justify-between bg-white py-5">
        <Space>
          <Link to={Paths.home}>
            <MainButton type="ghost" icon={<HomeOutlined />}>
              Home
            </MainButton>
          </Link>
        </Space>
        <Space>
          <Link to={Paths.login}>
            <MainButton type="ghost" icon={<UserOutlined />}>
              Login
            </MainButton>
          </Link>
        </Space>
      </Layout.Header>
    </>
  );
};

export default Header;
