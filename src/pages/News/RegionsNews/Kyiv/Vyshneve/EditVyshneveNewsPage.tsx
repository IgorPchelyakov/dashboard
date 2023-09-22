import Layout from '@/components/Layout/Layout';
import EditVyshneveNewsForm from '@/components/Posts/Regions/Kyiv/editVyshneveNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditVyshneveNewsByIdMutation,
  useGetVyshneveNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/vyshneve';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditVyshneveNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editVyshneveNews] = useEditVyshneveNewsByIdMutation();
  const { data } = useGetVyshneveNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editVyshneveNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.vyshneveNews);
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
          <EditVyshneveNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditVyshneveNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditVyshneveNewsPage;
