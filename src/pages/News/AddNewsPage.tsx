import Layout from '@/components/Layout/Layout';
import AddPostForm from '@/components/Posts/AddPostForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import { useAddNewsMutation } from '@/redux/services/news';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewsPage: FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [addNews] = useAddNewsMutation();
  const { data: employees } = useGetAllEmployeesQuery();

  const handleAddPost = async (data: News) => {
    try {
      await addNews(data).unwrap();
      navigate(`${Paths.news}`);
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

export default AddNewsPage;
