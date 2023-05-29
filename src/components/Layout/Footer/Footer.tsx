import { Image, Layout } from 'antd';
import { FC } from 'react';
import WM from '../../../assets/images/icons/Водяний знак відео.svg';

const Footer: FC = () => {
  return (
    <>
      <Layout.Footer className="mx-auto w-full max-w-[1200px] border-t border-black bg-white">
        <div className="flex flex-col items-center gap-4">
          <p>Copyright © Work Table Daycom. Всі права захищено.</p>
          <Image src={WM} preview={false} width={35} height={16} />
        </div>
      </Layout.Footer>
    </>
  );
};

export default Footer;
