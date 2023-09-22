import Layout from '@/components/Layout/Layout';
import EditPokrovNewsForm from '@/components/Posts/Regions/Dnipro/editPokrovNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPokrovNewsByIdMutation,
  useGetPokrovNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPokrovNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editPokrov] = useEditPokrovNewsByIdMutation();
  const { data } = useGetPokrovNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editPokrov({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.pokrovNews);
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
          <EditPokrovNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditPokrovNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPokrovNewsPage;
