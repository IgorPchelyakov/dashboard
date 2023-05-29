import Layout from '@/components/Layout/Layout';
import EditPostForm from '@/components/Posts/EditPostForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPostMutation,
  useGetPostByIdQuery,
} from '@/redux/services/posts';
import { Post } from '@/types/post';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPostPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  const [editPost] = useEditPostMutation();
  const { data } = useGetPostByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: Post) => {
    try {
      await editPost({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.posts);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Unknow error');
      }
    }
  };
  return (
    <>
      <Layout>
        <Row>
          <EditPostForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            post={data}
            employees={employees}
          ></EditPostForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPostPage;
