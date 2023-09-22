import Layout from '@/components/Layout/Layout';
import EditSkvyraNewsForm from '@/components/Posts/Regions/Kyiv/editSkvyraNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditSkvyraNewsByIdMutation,
  useGetSkvyraNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/skvyra';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditSkvyraNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editSkvyraNews] = useEditSkvyraNewsByIdMutation();
  const { data } = useGetSkvyraNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editSkvyraNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.skvyraNews);
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
          <EditSkvyraNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditSkvyraNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditSkvyraNewsPage;
