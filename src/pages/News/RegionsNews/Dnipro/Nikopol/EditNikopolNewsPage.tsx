import Layout from '@/components/Layout/Layout';
import EditNikopolNewsForm from '@/components/Posts/Regions/Dnipro/editNikopolNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditNikopolNewsByIdMutation,
  useGetNikopolNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditNikopolNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editNikopol] = useEditNikopolNewsByIdMutation();
  const { data } = useGetNikopolNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editNikopol({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.nikopolNews);
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
          <EditNikopolNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditNikopolNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditNikopolNewsPage;
