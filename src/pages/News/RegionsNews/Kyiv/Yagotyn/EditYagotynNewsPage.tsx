import Layout from '@/components/Layout/Layout';
import EditYagotynNewsForm from '@/components/Posts/Regions/Kyiv/editYagotynNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditYagotynNewsByIdMutation,
  useGetYagotynNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/yagotyn';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditYagotynNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editYagotynNews] = useEditYagotynNewsByIdMutation();
  const { data } = useGetYagotynNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editYagotynNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.yagotynNews);
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
          <EditYagotynNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditYagotynNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditYagotynNewsPage;
