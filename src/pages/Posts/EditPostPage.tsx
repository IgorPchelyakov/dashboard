import Layout from '@/components/Layout/Layout';
import EditPostForm from '@/components/Posts/EditPostForm';
import { Row } from 'antd';
import { FC } from 'react';

const EditPostPage: FC = () => {
  return (
    <>
      <Layout>
        <Row>
          <EditPostForm></EditPostForm>
        </Row>
      </Layout>
    </>
  );
};

export default EditPostPage;
