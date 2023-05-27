import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { useGetPostByIdQuery } from '@/redux/services/posts';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Image, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FC, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const PostPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useGetPostByIdQuery(params.id || '');

  if (isLoading) {
    return <Spin />;
  }

  if (!data) {
    return <Navigate to="/posts" />;
  }

  return (
    <>
      <Layout>
        <Content className="mx-auto max-w-[1200px]">
          <div className="">{data.title}</div>
          <div className="">
            <Image
              src={data.mainImage}
              width={1200}
              height={600}
              className=" object-cover"
            />
          </div>
          <div className="">{data.content}</div>
        </Content>
      </Layout>
    </>
  );
};

export default PostPage;
