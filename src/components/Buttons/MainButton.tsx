import { Button, Form } from 'antd';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: 'default' | 'circle' | 'round' | undefined;
  icon?: ReactNode;
};

const MainButton: FC<Props> = ({
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}) => {
  return (
    <>
      <Form.Item>
        <Button
          className="flex items-center justify-center bg-black text-yellow-400"
          htmlType={htmlType}
          type={type}
          danger={danger}
          loading={loading}
          shape={shape}
          icon={icon}
          onClick={onClick}
          size="large"
        >
          {children}
        </Button>
      </Form.Item>
    </>
  );
};

export default MainButton;
