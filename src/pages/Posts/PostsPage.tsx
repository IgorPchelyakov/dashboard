import Layout from '@/components/Layout/Layout';
import PostCard from '@/components/Posts/PostCard';
import { Paths } from '@/paths';
import { useGetAllPostsQuery } from '@/redux/services/posts';
import { Button, Input, Pagination, Spin } from 'antd';
import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostsPage: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllPostsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [titleQuery, setTitleQuery] = useState('');
  const [feedQuery, setFeedQuery] = useState('');

  const filteredData = useMemo(() => {
    let filteredPosts = data;
    if (titleQuery) {
      filteredPosts = filteredPosts?.filter((post) =>
        post.title.toLowerCase().includes(titleQuery.toLowerCase()),
      );
    }
    if (feedQuery) {
      filteredPosts = filteredPosts?.filter((post) =>
        post.feed.toLowerCase().includes(feedQuery.toLowerCase()),
      );
    }
    return filteredPosts;
  }, [data, titleQuery, feedQuery]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData?.slice(startIndex, endIndex);
  }, [currentPage, filteredData]);

  return (
    <>
      <Layout>
        <div className="mx-auto mb-8 flex max-w-[1200px] items-center border-b border-black">
          <div className="text-2xl font-bold">Стрічка новин</div>
          <Button
            type={'link'}
            onClick={() => navigate(`${Paths.postAdd}`)}
            className="text-black"
          >
            Створити публікацію
          </Button>
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
            <div className="mb-4">
              <Input
                placeholder="Пошук по стрічці"
                value={feedQuery}
                onChange={(e) => setFeedQuery(e.target.value)}
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
          paginatedData.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              publishedAt={post.publishedAt}
              feed={post.feed}
              postType={post.postType}
              topic={post.topic}
              author={post.author}
              title={post.title}
              desc={post.desc}
              showDesc={post.showDesc}
              mainImage={post.mainImage}
              imageSize={post.imageSize}
              content={post.content}
              live={post.live}
              showAuthorDesc={post.showAuthorDesc}
              showAuthor={post.showAuthor}
              publishOnSocialMedia={post.publishOnSocialMedia}
              views={post.views}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              UserId={post.UserId}
              userId={post.userId}
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

export default PostsPage;
