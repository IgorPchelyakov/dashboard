import Layout from '@/components/Layout/Layout';
import EditVyshhorodNewsForm from '@/components/Posts/Regions/Kyiv/editVyshhorodNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditVyshhorodNewsByIdMutation,
  useGetVyshhorodNewsByIdQuery,
} from '@/redux/services/regionsNews/Kyiv/vyshhorod';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditVyshhorodNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editVyshhorodNews] = useEditVyshhorodNewsByIdMutation();
  const { data } = useGetVyshhorodNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editVyshhorodNews({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.vyshhorodNews);
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
          <EditVyshhorodNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditVyshhorodNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditVyshhorodNewsPage;
