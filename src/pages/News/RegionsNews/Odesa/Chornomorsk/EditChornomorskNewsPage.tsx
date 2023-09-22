import Layout from '@/components/Layout/Layout';
import EditChornomorskNewsForm from '@/components/Posts/Regions/Odesa/editChornomorskNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditChornomorskNewsByIdMutation,
  useGetChornomorskNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/chornomorsk';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditChornomorskNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editChornomorskNews] = useEditChornomorskNewsByIdMutation();
  const { data } = useGetChornomorskNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editChornomorskNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.chornomorskNews);
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
          <EditChornomorskNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditChornomorskNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditChornomorskNewsPage;
