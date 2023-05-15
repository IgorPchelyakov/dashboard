import { Form, Switch } from 'antd';
import { FC, useState } from 'react';

type PropsSwitch = {
  name: string;
  label?: string;
  required?: boolean;
};

const CustomSwitch: FC<PropsSwitch> = ({ name, label, required }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: required, message: `Обов'язкове поле` }]}
        valuePropName="checked"
      >
        <Switch
          size={'default'}
          className="bg-gray-600"
          checked={isChecked}
          onChange={handleToggle}
        />
      </Form.Item>
    </>
  );
};

export default CustomSwitch;
