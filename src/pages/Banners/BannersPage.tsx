import BannerCard from '@/components/Banners/BannerCard';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { useGetAllBannersQuery } from '@/redux/services/banners';
import { Button, Spin } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const BannersPage: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllBannersQuery();
  return (
    <>
      <Layout>
        <div className="mx-auto mb-8 max-w-[1200px] items-center">
          <div className="mb-2 flex items-center">
            <div className="text-2xl font-bold">Банери</div>
            <Button
              type={'link'}
              onClick={() => navigate(`${Paths.bannerAdd}`)}
              className="text-black"
            >
              Додати банер
            </Button>
          </div>
          <div className="border-y-2 border-black py-1">
            <div className="flex items-center justify-between gap-5 px-6">
              <div className="w-[270px]">Заголовок</div>
              <div className="w-[115px]">Зображення</div>
              <div className="w-[270px]">Розміщено</div>
              <div className="w-[120px]">Дата розміщення</div>
              <div className="w-[120px]">Ротація до дати</div>
              <div className="w-[100px]">Автор</div>
            </div>
          </div>
        </div>
        {isLoading && <Spin />}
        {data &&
          data.map((data) => (
            <BannerCard
              key={data.id}
              id={data.id}
              title={data.title}
              imgUrl={data.imgUrl}
              block={data.block}
              publishAt={data.publishAt}
              endAt={data.endAt}
            />
          ))}
      </Layout>
    </>
  );
};

export default BannersPage;
