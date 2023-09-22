import Layout from '@/components/Layout/Layout';
import EditBoryspilNewsForm from '@/components/Posts/Regions/Kyiv/editBoryspilNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBoryspilNewsByIdMutation,
  useGetBoryspilNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/boryspil';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBoryspilNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBoryspilNews] = useEditBoryspilNewsByIdMutation();
  const { data } = useGetBoryspilNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBoryspilNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.boryspilNews);
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
          <EditBoryspilNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBoryspilNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBoryspilNewsPage;
