import Layout from '@/components/Layout/Layout';
import EditPavlogradNewsForm from '@/components/Posts/Regions/Dnipro/editPavlogradNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPavlogradNewsByIdMutation,
  useGetPavlogradNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPavlogradNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editPavlograd] = useEditPavlogradNewsByIdMutation();
  const { data } = useGetPavlogradNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editPavlograd({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.pavlogradNews);
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
          <EditPavlogradNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditPavlogradNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPavlogradNewsPage;
