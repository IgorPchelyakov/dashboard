import Layout from '@/components/Layout/Layout';
import EditPodilskNewsForm from '@/components/Posts/Regions/Odesa/editPodilskNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPodilskNewsByIdMutation,
  useGetPodilskNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/podilsk';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPodilskNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editPodilskNews] = useEditPodilskNewsByIdMutation();
  const { data } = useGetPodilskNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editPodilskNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.podilskNews);
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
          <EditPodilskNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditPodilskNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPodilskNewsPage;
