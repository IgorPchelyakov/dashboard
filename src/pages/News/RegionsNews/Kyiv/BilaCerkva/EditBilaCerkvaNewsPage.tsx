import Layout from '@/components/Layout/Layout';
import EditBilaCerkvaNewsForm from '@/components/Posts/Regions/Kyiv/editBilaCerkvaNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBilacerkvaNewsByIdMutation,
  useGetBilacerkvaNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/bilacerkva';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBilaCerkvaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBilacerkva] = useEditBilacerkvaNewsByIdMutation();
  const { data } = useGetBilacerkvaNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBilacerkva({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.bilacerkvaNews);
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
          <EditBilaCerkvaNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBilaCerkvaNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBilaCerkvaNewsPage;
