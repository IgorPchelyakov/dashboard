import { Form, Input } from 'antd';
import { FC } from 'react';
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name: string;
  placeholder?: string;
  dependencies?: NamePath[];
  label?: string;
  required?: boolean;
};

const PasswordInput: FC<Props> = ({
  name,
  placeholder,
  dependencies,
  label,
  required,
}) => {
  return (
    <>
      <Form.Item
        name={name}
        dependencies={dependencies}
        hasFeedback
        style={{ marginBottom: '12px' }}
        label={label}
        rules={[
          {
            required: required,
            message: `Обов'язкове поле`,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }

              if (name === 'confirmPassword') {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Passwords must match'));
              } else {
                if (value.length < 6) {
                  return Promise.reject(
                    new Error('Password must be at least 6 characters long'),
                  );
                }
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input.Password placeholder={placeholder} size="small" />
      </Form.Item>
    </>
  );
};

export default PasswordInput;
