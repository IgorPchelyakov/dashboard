import MainButton from '@/components/Buttons/MainButton';
import MainMenuDrawer from '@/components/Drawer/MainMenuDrawer';
import { Paths } from '@/paths';
import { logout } from '@/redux/features/login/login.slice';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoMenu, setInfoMenu] = useState(false);

  const showMenuDrawer = () => {
    setMenuOpen(true);
  };
  const onMenuClose = () => {
    setMenuOpen(false);
  };
  const showInfoDrawer = () => {
    setInfoMenu(true);
  };
  const onInfoMenuClose = () => {
    setInfoMenu(false);
  };

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <>
      <Layout.Header
        style={{ fontFamily: 'Inter' }}
        className="mb-5 flex min-h-[60px] items-center justify-between bg-white py-5"
      >
        <MainMenuDrawer
          title={'Menu'}
          placement={'left'}
          closable={false}
          onClose={onMenuClose}
          onClick={showMenuDrawer}
          open={menuOpen}
          icon={<MenuOutlined />}
          htmlType={'button'}
          type={'ghost'}
        >
          <Space>
            <div className="flex flex-col gap-2">
              <Link to={Paths.home}>Головна сторінка</Link>
              <Link to={Paths.posts}>Стрічка новин</Link>
              <Link to={Paths.postAdd}>Створити публікацію</Link>
              <Link to={Paths.media}>Медіфайли</Link>
              <Link to={Paths.employees}>Співробітники</Link>
              <Link to={Paths.banners}>Банери</Link>
            </div>
          </Space>
        </MainMenuDrawer>
        <MainMenuDrawer
          title={'Account info'}
          placement={'right'}
          closable={false}
          onClose={onInfoMenuClose}
          open={infoMenu}
          onClick={showInfoDrawer}
          htmlType={'button'}
          type={'ghost'}
          icon={<UserOutlined />}
        >
          <MainButton onClick={onLogoutClick}>Log Out</MainButton>
        </MainMenuDrawer>
      </Layout.Header>
    </>
  );
};

export default Header;
