import Layout from '@/components/Layout/Layout';
import EditKiliyaNewsForm from '@/components/Posts/Regions/Odesa/editKiliyaNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditKiliyaNewsByIdMutation,
  useGetKiliyaNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/kiliya';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditKiliyaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editKiliyaNews] = useEditKiliyaNewsByIdMutation();
  const { data } = useGetKiliyaNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editKiliyaNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.kiliyaNews);
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
          <EditKiliyaNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditKiliyaNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditKiliyaNewsPage;
