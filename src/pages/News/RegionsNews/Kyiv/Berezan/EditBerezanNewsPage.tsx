import Layout from '@/components/Layout/Layout';
import EditBerezanNewsForm from '@/components/Posts/Regions/Kyiv/editBerezanNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBerezanNewsByIdMutation,
  useGetBerezanNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/berezan';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBerezanNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBerezanNews] = useEditBerezanNewsByIdMutation();
  const { data } = useGetBerezanNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBerezanNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.berezanNews);
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
          <EditBerezanNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBerezanNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBerezanNewsPage;
