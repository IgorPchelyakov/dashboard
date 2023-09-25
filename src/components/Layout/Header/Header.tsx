import MainButton from '@/components/Buttons/MainButton';
import MainMenuDrawer from '@/components/Drawer/MainMenuDrawer';
import { Paths } from '@/paths';
import { logout, selectUser } from '@/redux/features/login/login.slice';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Image, Layout, Space } from 'antd';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/icons/DAYCOM LOGOTIP.svg';
import lineNews from '@/assets/images/icons/publication.svg';
import createNews from '@/assets/images/icons/createNews.svg';
import { useAppSelector } from '@/hooks/hooks';

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoMenu, setInfoMenu] = useState(false);
  const user = useAppSelector(selectUser);

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
        className="fixed left-0 right-0 top-0 z-10 mb-5 h-[40px] bg-white px-0 pb-5"
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between ">
          <MainMenuDrawer
            title={'Домашня сторінка'}
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
                <Link to={Paths.news}>Стрічка новин</Link>
                <Link to={Paths.newsAdd}>Створити публікацію</Link>
                <Link to={Paths.media}>Медіфайли</Link>
                <Link to={Paths.employees}>Співробітники</Link>
                {/* <Link to={Paths.banners}>Банери</Link> */}
              </div>
            </Space>
          </MainMenuDrawer>
          <Link
            to={Paths.home}
            className="h-[21px] w-[145px] translate-x-[167px] translate-y-[-18px]"
          >
            <Image src={Logo} preview={false} />
          </Link>
          <div className="flex items-center gap-4">
            <Link to={Paths.news} className="flex h-[24px] items-center gap-2">
              <Image src={lineNews} height={22} width={22} preview={false} />
              <div>Стрічка новин</div>
            </Link>
            <Link
              to={Paths.newsAdd}
              className="flex h-[24px] items-center gap-2"
            >
              <Image height={22} width={22} src={createNews} preview={false} />
              <div>Створити публікацію</div>
            </Link>
            <MainMenuDrawer
              title={'Обліковий запис'}
              placement={'right'}
              closable={false}
              onClose={onInfoMenuClose}
              open={infoMenu}
              onClick={showInfoDrawer}
              htmlType={'button'}
              type={'ghost'}
              icon={<UserOutlined />}
            >
              <Space className="mb-4 flex justify-center">
                <div className="text-2xl font-bold">Вітаємо!</div>
              </Space>
              <Space className="flex flex-col gap-4">
                <Image
                  src={user?.avatarUrl}
                  preview={false}
                  width={100}
                  height={100}
                  className="rounded-[50%] object-cover"
                />
                <div>
                  {user?.lastName} {user?.firstName} {user?.middleName}
                </div>
                <div className="mb-5">{user?.job}</div>
                <MainButton onClick={onLogoutClick}>Завершити сеанс</MainButton>
              </Space>
            </MainMenuDrawer>
          </div>
        </div>
      </Layout.Header>
    </>
  );
};

export default Header;
