import Layout from '@/components/Layout/Layout';
import FastivPostCard from '@/components/Posts/Regions/Kyiv/FastivNewsCard';
import RegionsPopover from '@/components/RegionPopover/RegionsPopover';
import { Paths } from '@/paths';
import { useGetAllFastivNewsQuery } from '@/redux/services/regionsNews/Kyiv/fastiv';

import { News } from '@/types/news';
import { Button, Input, Pagination, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FastivTheNewsPage: FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [titleQuery, setTitleQuery] = useState('');
  const pageSize = 20;

  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  const { data, isLoading } = useGetAllFastivNewsQuery();
  useEffect(() => {
    let filteredPosts = data;
    if (titleQuery) {
      filteredPosts = filteredPosts?.filter((news) =>
        news.title.toLowerCase().includes(titleQuery.toLowerCase()),
      );
    }
    setFilteredData(filteredPosts);

    setCurrentPage(1);
  }, [data, titleQuery]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedData = filteredData?.slice(startIndex, endIndex);
    setPaginatedData(slicedData);
  }, [filteredData, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Layout>
        <div className="mx-auto mb-8 flex max-w-[1200px] items-center border-b border-black">
          <div className="text-2xl font-bold">Стрічка новин</div>
          <Button
            type={'link'}
            onClick={() => navigate(`${Paths.newsAdd}`)}
            className="text-black"
          >
            Створити публікацію
          </Button>
          <div className="flex gap-2">
            <RegionsPopover />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="mb-4">
              <Input
                placeholder="Пошук по заголовкам"
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.target.value)}
                style={{ width: 250, marginRight: 8 }}
              />
            </div>
          </div>
          {filteredData && filteredData.length > pageSize && (
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              className="mb-5"
              showSizeChanger={false}
            />
          )}
        </div>
        {isLoading && <Spin />}
        {paginatedData && paginatedData.length > 0 ? (
          paginatedData.map((news: News) => (
            <FastivPostCard
              key={news.id}
              id={news.id}
              publishedAt={news.publishedAt}
              feed={news.feed}
              postType={news.postType}
              title={news.title}
              views={news.views}
              UserId={news.UserId}
            />
          ))
        ) : (
          <div>Немає доступних публікацій</div>
        )}
        <div className="flex justify-end">
          {filteredData && filteredData.length > pageSize && (
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              className="mb-5"
              showSizeChanger={false}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export default FastivTheNewsPage;
