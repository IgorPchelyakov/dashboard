import Layout from '@/components/Layout/Layout';
import EditZhovtiVodyNewsForm from '@/components/Posts/Regions/Dnipro/editZhovtiVodyNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditZhovtiVodyNewsByIdMutation,
  useGetZhovtiVodyNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditZhovtiVodyNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editZhovtiVody] = useEditZhovtiVodyNewsByIdMutation();
  const { data } = useGetZhovtiVodyNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editZhovtiVody({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.zhovtiVodyNews);
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
          <EditZhovtiVodyNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditZhovtiVodyNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditZhovtiVodyNewsPage;
