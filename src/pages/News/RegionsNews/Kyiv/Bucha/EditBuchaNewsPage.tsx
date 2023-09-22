import Layout from '@/components/Layout/Layout';
import EditBuchaNewsForm from '@/components/Posts/Regions/Kyiv/editBuchaNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBuchaNewsByIdMutation,
  useGetBuchaNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/bucha';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBuchaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBuchaNews] = useEditBuchaNewsByIdMutation();
  const { data } = useGetBuchaNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBuchaNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.buchaNews);
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
          <EditBuchaNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBuchaNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBuchaNewsPage;
