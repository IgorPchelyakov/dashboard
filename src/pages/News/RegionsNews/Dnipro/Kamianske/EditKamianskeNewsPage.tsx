import Layout from '@/components/Layout/Layout';
import EditKamianskeNewsForm from '@/components/Posts/Regions/Dnipro/editKamianskeNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditKamianskeNewsByIdMutation,
  useGetKamianskeNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditKamianskeNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editKamianske] = useEditKamianskeNewsByIdMutation();
  const { data } = useGetKamianskeNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editKamianske({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.kamianskeNews);
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
          <EditKamianskeNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditKamianskeNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditKamianskeNewsPage;
