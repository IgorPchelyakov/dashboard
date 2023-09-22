import Layout from '@/components/Layout/Layout';
import EditSinelnikovoNewsForm from '@/components/Posts/Regions/Dnipro/editSinelnikovoNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditSinelnikovoNewsByIdMutation,
  useGetSinelnikovoNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditSinelnikovoNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editSinelnikovo] = useEditSinelnikovoNewsByIdMutation();
  const { data } = useGetSinelnikovoNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editSinelnikovo({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.sinelnikovoNews);
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
          <EditSinelnikovoNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditSinelnikovoNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditSinelnikovoNewsPage;
