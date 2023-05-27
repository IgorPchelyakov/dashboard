import { FC, ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header/Header';
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto" style={{ fontFamily: 'Inter' }}>
        <Header />
        <AntLayout.Content style={{ height: '100%', fontFamily: 'Inter' }}>
          {children}
        </AntLayout.Content>
      </div>
    </>
  );
};

export default Layout;
