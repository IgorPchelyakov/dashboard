import Layout from '@/components/Layout/Layout';
import EditObukhivNewsForm from '@/components/Posts/Regions/Kyiv/editObukhivNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditObukhivNewsByIdMutation,
  useGetObukhivNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/obukhiv';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditObukhivNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editObukhivNews] = useEditObukhivNewsByIdMutation();
  const { data } = useGetObukhivNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editObukhivNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.obukhivNews);
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
          <EditObukhivNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditObukhivNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditObukhivNewsPage;
