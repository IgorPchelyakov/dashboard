import { Button, Result, Row } from 'antd';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Statuses: Record<string, string> = {
  created: 'Створено успішно',
  updated: 'Оновлення успішне',
  deleted: 'Видалено',
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
              <Link to="/">На домашню сторінку</Link>
            </Button>
          }
        />
      </Row>
    </>
  );
};

export default CreateStatus;
