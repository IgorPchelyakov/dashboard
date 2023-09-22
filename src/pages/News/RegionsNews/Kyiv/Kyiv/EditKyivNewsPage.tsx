import Layout from '@/components/Layout/Layout';
import EditKyivNewsForm from '@/components/Posts/Regions/Kyiv/editKyivNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditKyivNewsByIdMutation,
  useGetKyivNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/kyiv';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditKyivNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editKyivNews] = useEditKyivNewsByIdMutation();
  const { data } = useGetKyivNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editKyivNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.kyivNews);
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
          <EditKyivNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditKyivNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditKyivNewsPage;
