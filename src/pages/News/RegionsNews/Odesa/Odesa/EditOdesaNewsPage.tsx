import Layout from '@/components/Layout/Layout';
import EditOdesaNewsForm from '@/components/Posts/Regions/Odesa/editOdesaNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditOdesaNewsByIdMutation,
  useGetOdesaNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/odesa';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditOdesaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editOdesaNews] = useEditOdesaNewsByIdMutation();
  const { data } = useGetOdesaNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editOdesaNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.odesaNews);
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
          <EditOdesaNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditOdesaNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditOdesaNewsPage;
