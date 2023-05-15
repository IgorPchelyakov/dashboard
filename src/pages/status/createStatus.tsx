import { Button, Result, Row } from 'antd';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Statuses: Record<string, string> = {
  created: 'Employee created',
  updated: 'User update',
  deleted: 'User deleted',
};

const CreateStatus: FC = () => {
  const { status } = useParams();
  return (
    <>
      <Row align={'middle'} justify={'center'} style={{ width: '100%' }}>
        <Result
          status={status ? 'success' : 404}
          title={status ? Statuses[status] : 'Not found'}
          extra={
            <Button key={'dashboard'}>
              <Link to="/">Go home</Link>
            </Button>
          }
        />
      </Row>
    </>
  );
};

export default CreateStatus;
