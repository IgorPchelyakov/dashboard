import Layout from '@/components/Layout/Layout';
import EditBilgorodDnistrovskyNewsForm from '@/components/Posts/Regions/Odesa/editBilgorodDnistrovskyNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import {
  useEditBilgorodDnistrovskyNewsByIdMutation,
  useGetBilgorodDnistrovskyNewsByIdQuery,
} from '@/redux/services/regionsNews/Odesa/BilgorodDnistrovsky';
import { News } from '@/types/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBilgorodDnistrovskyNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const [editBilgorodDnistrovskyNews] =
    useEditBilgorodDnistrovskyNewsByIdMutation();
  const { data } = useGetBilgorodDnistrovskyNewsByIdQuery(params.id || '');
  const { data: employees } = useGetAllEmployeesQuery();

  const handleEditPost = async (data: News) => {
    try {
      await editBilgorodDnistrovskyNews({
        ...data,
        id: params.id ?? '',
      }).unwrap();
      navigate(Paths.bilgorodDnistrovskyNews);
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
          <EditBilgorodDnistrovskyNewsForm
            onFinish={handleEditPost}
            btnText={'Зберегти'}
            error={error}
            news={data}
            employees={employees}
          ></EditBilgorodDnistrovskyNewsForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditBilgorodDnistrovskyNewsPage;
