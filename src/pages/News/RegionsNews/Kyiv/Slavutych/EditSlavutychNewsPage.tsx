import Layout from '@/components/Layout/Layout';
import EditSlavutychNewsForm from '@/components/Posts/Regions/Kyiv/editSlavutychNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditSlavutychNewsByIdMutation,
  useGetSlavutychNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/slavutych';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditSlavutychNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editSlavutychNews] = useEditSlavutychNewsByIdMutation();
  const { data } = useGetSlavutychNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editSlavutychNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.slavutychNews);
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
          <EditSlavutychNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditSlavutychNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditSlavutychNewsPage;
