import Layout from '@/components/Layout/Layout';
import EditNewsForm from '@/components/Posts/EditNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditNewsMutation,
  useGetNewsByIdQuery,
} from '@/redux/services/news';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  const [editNews] = useEditNewsMutation();
  const { data } = useGetNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.news);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Невідома помилка');
      }
    }
  };
  return (
    <>
      <Layout>
        <Row>
          <EditNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditNewsPage;
