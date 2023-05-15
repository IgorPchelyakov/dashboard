import { Form, Input } from 'antd';
import { FC } from 'react';

type Props = {
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
};

const MainInput: FC<Props> = ({
  name,
  placeholder,
  type = 'text',
  disabled,
  label,
  required,
}) => {
  return (
    <>
      <Form.Item
        name={name}
        shouldUpdate={true}
        style={{ marginBottom: '12px' }}
        label={label}
        rules={[{ required: required, message: `Обов'язкове поле` }]}
      >
        <Input
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          size="small"
        />
      </Form.Item>
    </>
  );
};

export default MainInput;
