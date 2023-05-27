import Layout from '@/components/Layout/Layout';
import PostCard from '@/components/Posts/PostCard';
import { Paths } from '@/paths';
import { useGetAllPostsQuery } from '@/redux/services/posts';
import { Button, Spin } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const PostsPage: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllPostsQuery();

  return (
    <>
      <Layout>
        <div className="mx-auto mb-8 flex max-w-[1200px] items-center">
          <div className="text-2xl font-bold">Стрічка новин</div>
          <Button
            type={'link'}
            onClick={() => navigate(`${Paths.postAdd}`)}
            className="text-black"
          >
            Створити публікацію
          </Button>
        </div>
        {isLoading && <Spin />}
        {data &&
          data.map((data) => (
            <PostCard
              key={data.id}
              id={data.id}
              publishedAt={data.publishedAt}
              feed={data.feed}
              postType={data.postType}
              topic={data.topic}
              author={data.author}
              title={data.title}
              desc={data.desc}
              showDesc={data.showDesc}
              mainImage={data.mainImage}
              imageSize={data.imageSize}
              content={data.content}
              live={data.live}
              showAuthorDesc={data.showAuthorDesc}
              showAuthor={data.showAuthor}
              publishOnSocialMedia={data.publishOnSocialMedia}
              views={data.views}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              UserId={data.UserId}
              userId={data.userId}
            />
          ))}
      </Layout>
    </>
  );
};

export default PostsPage;
