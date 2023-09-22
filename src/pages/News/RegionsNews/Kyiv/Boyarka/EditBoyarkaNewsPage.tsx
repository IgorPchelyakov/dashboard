import Layout from '@/components/Layout/Layout';
import EditBoyarkaNewsForm from '@/components/Posts/Regions/Kyiv/editBoyarkaNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBoyarkaNewsByIdMutation,
  useGetBoyarkaNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/boyarka';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBoyarkaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBoyarkaNews] = useEditBoyarkaNewsByIdMutation();
  const { data } = useGetBoyarkaNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBoyarkaNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.boyarkaNews);
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
          <EditBoyarkaNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBoyarkaNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBoyarkaNewsPage;
