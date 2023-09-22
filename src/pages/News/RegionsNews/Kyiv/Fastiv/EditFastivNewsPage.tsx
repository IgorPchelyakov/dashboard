import Layout from '@/components/Layout/Layout';
import EditFastivNewsForm from '@/components/Posts/Regions/Kyiv/editFastivNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditFastivNewsByIdMutation,
  useGetFastivNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/fastiv';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditFastivNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editFastivNews] = useEditFastivNewsByIdMutation();
  const { data } = useGetFastivNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editFastivNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.fastivNews);
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
          <EditFastivNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditFastivNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditFastivNewsPage;
