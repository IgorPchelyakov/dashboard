import Layout from '@/components/Layout/Layout';
import EditMarganetsNewsForm from '@/components/Posts/Regions/Dnipro/editMarganetsNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditMarganetsNewsByIdMutation,
  useGetMarganetsNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditMarganetsNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editMarganets] = useEditMarganetsNewsByIdMutation();
  const { data } = useGetMarganetsNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editMarganets({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.marganetsNews);
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
          <EditMarganetsNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditMarganetsNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditMarganetsNewsPage;
