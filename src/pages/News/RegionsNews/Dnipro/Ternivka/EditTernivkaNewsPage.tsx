import Layout from '@/components/Layout/Layout';
import EditTernivkaNewsForm from '@/components/Posts/Regions/Dnipro/editTernivkaNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditTernivkaNewsByIdMutation,
  useGetTernivkaNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTernivkaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editTernivka] = useEditTernivkaNewsByIdMutation();
  const { data } = useGetTernivkaNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editTernivka({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.ternivkaNews);
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
          <EditTernivkaNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditTernivkaNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditTernivkaNewsPage;
