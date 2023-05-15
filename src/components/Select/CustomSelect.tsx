import { Form, Select } from 'antd';
import { FC } from 'react';

type Props<T> = {
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
  options: Array<T>;
};

type OptionsProps = {
  value: string;
  label: string;
};

const CustomSelect: FC<Props<OptionsProps>> = ({
  name,
  label,
  defaultValue,
  required,
  options,
}) => {
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: required, message: `Обов'язкове поле` }]}
      >
        <Select
          defaultValue={defaultValue}
          options={options}
          style={{ maxWidth: '300px' }}
        />
      </Form.Item>
    </>
  );
};

export default CustomSelect;
