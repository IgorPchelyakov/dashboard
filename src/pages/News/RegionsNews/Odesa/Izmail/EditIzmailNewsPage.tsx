import Layout from '@/components/Layout/Layout';
import EditIzmailNewsForm from '@/components/Posts/Regions/Odesa/editIzmailNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditIzmailNewsByIdMutation,
  useGetIzmailNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/izmail';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditIzmailNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editIzmailNews] = useEditIzmailNewsByIdMutation();
  const { data } = useGetIzmailNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editIzmailNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.izmailNews);
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
          <EditIzmailNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditIzmailNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditIzmailNewsPage;
