import Layout from '@/components/Layout/Layout';
import EditPershotravenskNewsForm from '@/components/Posts/Regions/Dnipro/editPershotravenskNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPershotravenskNewsByIdMutation,
  useGetPershotravenskNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPershotravenskNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editPershotravensk] = useEditPershotravenskNewsByIdMutation();
  const { data } = useGetPershotravenskNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editPershotravensk({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.pershotravenskNews);
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
          <EditPershotravenskNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditPershotravenskNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPershotravenskNewsPage;
