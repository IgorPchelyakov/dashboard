import Layout from '@/components/Layout/Layout';
import EditNovomoskovskNewsForm from '@/components/Posts/Regions/Dnipro/editNovomoskovskNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditNovomoskovskNewsByIdMutation,
  useGetNovomoskovskNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditNovomoskovskNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editNovomoskovsk] = useEditNovomoskovskNewsByIdMutation();
  const { data } = useGetNovomoskovskNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editNovomoskovsk({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.novomoskovskNews);
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
          <EditNovomoskovskNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditNovomoskovskNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditNovomoskovskNewsPage;
