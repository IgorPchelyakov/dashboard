import Layout from '@/components/Layout/Layout';
import EditKryvyiRihNewsForm from '@/components/Posts/Regions/Dnipro/editKryvyiRihNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditKryvyiRihNewsByIdMutation,
  useGetKryvyiRihNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditKryvyiRihNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editKryvyiRih] = useEditKryvyiRihNewsByIdMutation();
  const { data } = useGetKryvyiRihNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editKryvyiRih({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.kryvyiRihNews);
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
          <EditKryvyiRihNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditKryvyiRihNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditKryvyiRihNewsPage;
