import { FC, ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header/Header';
import Footer from './Footer/Footer';
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        className="container mx-auto flex min-h-screen flex-col"
        style={{ fontFamily: 'Inter' }}
      >
        <Header />
        <AntLayout.Content
          style={{ height: '100%', fontFamily: 'Inter' }}
          className="mx-auto mt-[80px] w-full max-w-[1200px] flex-grow"
        >
          {children}
        </AntLayout.Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
