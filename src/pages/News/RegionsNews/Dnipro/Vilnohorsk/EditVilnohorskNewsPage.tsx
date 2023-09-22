import Layout from '@/components/Layout/Layout';
import EditVilnohorskNewsForm from '@/components/Posts/Regions/Dnipro/editVilnohorskNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditVilnohorskNewsByIdMutation,
  useGetVilnohorskNewsByIdQuery,
} from '@/redux/services/regionsNews/Dnipro/dnipro';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditVilnohorskNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editVilnohorsk] = useEditVilnohorskNewsByIdMutation();
  const { data } = useGetVilnohorskNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editVilnohorsk({ ...data, id: params.id ?? '' }).unwrap();
      navigate(Paths.vilnohorskNews);
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
          <EditVilnohorskNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditVilnohorskNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditVilnohorskNewsPage;
