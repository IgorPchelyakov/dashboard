import Layout from '@/components/Layout/Layout';
import EditPereyaslavNewsForm from '@/components/Posts/Regions/Kyiv/editPereyaslavNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPereyaslavNewsByIdMutation,
  useGetPereyaslavNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/pereyaslav';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPereyaslavNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editPereyaslavNews] = useEditPereyaslavNewsByIdMutation();
  const { data } = useGetPereyaslavNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editPereyaslavNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.pereyaslavNews);
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
          <EditPereyaslavNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditPereyaslavNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPereyaslavNewsPage;
