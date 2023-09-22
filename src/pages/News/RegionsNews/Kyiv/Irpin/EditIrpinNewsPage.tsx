import Layout from '@/components/Layout/Layout';
import EditIrpinNewsForm from '@/components/Posts/Regions/Kyiv/editIrpinNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditIrpinNewsByIdMutation,
  useGetIrpinNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/irpin';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditIrpinNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editIrpinNews] = useEditIrpinNewsByIdMutation();
  const { data } = useGetIrpinNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editIrpinNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.irpinNews);
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
          <EditIrpinNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditIrpinNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditIrpinNewsPage;
