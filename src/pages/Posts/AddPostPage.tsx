import Layout from '@/components/Layout/Layout';
import AddPostForm from '@/components/Posts/AddPostForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import { useAddPostMutation } from '@/redux/services/posts';
import { Post } from '@/types/post';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostPage: FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [addPost] = useAddPostMutation();
  const { data: employees } = useGetAllEmployeesQuery();

  const handleAddPost = async (data: Post) => {
    try {
      await addPost(data).unwrap();
      navigate(`${Paths.status}/created`);
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
        <AddPostForm
          title={'Створити публікацію'}
          btnText={'Створити'}
          onFinish={handleAddPost}
          error={error}
          employees={employees}
        ></AddPostForm>
      </Layout>
    </>
  );
};

export default AddPostPage;
