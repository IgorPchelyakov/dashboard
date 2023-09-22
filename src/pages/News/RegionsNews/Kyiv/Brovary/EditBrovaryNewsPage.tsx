import Layout from '@/components/Layout/Layout';
import EditBrovaryNewsForm from '@/components/Posts/Regions/Kyiv/editBrovaryNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBrovaryNewsByIdMutation,
  useGetBrovaryNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/brovary';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBrovaryNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBrovaryNews] = useEditBrovaryNewsByIdMutation();
  const { data } = useGetBrovaryNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBrovaryNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.brovaryNews);
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
          <EditBrovaryNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBrovaryNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBrovaryNewsPage;
