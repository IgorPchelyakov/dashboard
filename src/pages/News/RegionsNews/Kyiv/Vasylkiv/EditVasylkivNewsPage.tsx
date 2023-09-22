import Layout from '@/components/Layout/Layout';
import EditVasylkivNewsForm from '@/components/Posts/Regions/Kyiv/editVasylkivNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditVasylkivNewsByIdMutation,
  useGetVasylkivNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/vasylkiv';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditVasylkivNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editVasylkivNews] = useEditVasylkivNewsByIdMutation();
  const { data } = useGetVasylkivNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editVasylkivNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.vasylkivNews);
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
          <EditVasylkivNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditVasylkivNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditVasylkivNewsPage;
