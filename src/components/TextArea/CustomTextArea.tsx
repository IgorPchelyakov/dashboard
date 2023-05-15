import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC } from 'react';

type Props = {
  name: string;
  label?: string;
  required?: boolean;
};

const CustomTextArea: FC<Props> = ({ name, label, required }) => {
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: required, message: `Обов'язкове поле` }]}
      >
        <TextArea size={'small'} rows={5} style={{ resize: 'none' }} />
      </Form.Item>
    </>
  );
};

export default CustomTextArea;
