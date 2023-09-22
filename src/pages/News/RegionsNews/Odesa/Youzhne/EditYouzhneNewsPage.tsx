import Layout from '@/components/Layout/Layout';
import EditYouzhneNewsForm from '@/components/Posts/Regions/Odesa/editYouzhneNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditYouzhneNewsByIdMutation,
  useGetYouzhneNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/youzhne';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditYouzhneNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editYouzhneNews] = useEditYouzhneNewsByIdMutation();
  const { data } = useGetYouzhneNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editYouzhneNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.youzhneNews);
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
          <EditYouzhneNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditYouzhneNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditYouzhneNewsPage;
