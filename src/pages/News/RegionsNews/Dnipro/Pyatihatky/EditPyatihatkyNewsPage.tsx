import Layout from '@/components/Layout/Layout';
import EditPyatihatkyNewsForm from '@/components/Posts/Regions/Dnipro/editPyatihatkyNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditPyatihatkyNewsByIdMutation,
  useGetPyatihatkyNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPyatihatkyNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editPyatihatky] = useEditPyatihatkyNewsByIdMutation();
  const { data } = useGetPyatihatkyNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editPyatihatky({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.pyatihatkyNews);
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
          <EditPyatihatkyNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditPyatihatkyNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPyatihatkyNewsPage;
