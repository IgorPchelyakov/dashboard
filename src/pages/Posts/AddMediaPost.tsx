import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import { useCurrentQuery } from '@/redux/services/auth';
import {
  useAddMediaMutation,
  useGetAllMediaQuery,
} from '@/redux/services/media';
import { Media } from '@/types/media';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Button, Form, Input, Modal, message } from 'antd';
import { FC, useState } from 'react';

const AddMediaPost: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMedia] = useAddMediaMutation();
  const { refetch } = useGetAllMediaQuery();
  const { data: user } = useCurrentQuery();
  const [error, setError] = useState('');
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Зображення успішно завантажено',
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageFile(file);
  };

  const handleAddMedia = async (data: Media) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('author', data.author);
      formData.append('desc', data.desc);
      if (user?.id !== undefined) {
        formData.append('UserId', user?.id);
      }
      if (imageFile) {
        formData.append('image', imageFile);
      }

      await addMedia(formData).unwrap();
      setIsFormSubmitted(true);
      form.resetFields();
      success();
      refetch();
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Unknow error');
      }
    }
  };

  return (
    <>
      <div>
        {contextHolder}
        <Button type={'link'} onClick={showModal} className="text-black">
          Додати зображення
        </Button>
        <Modal
          title={'Додати медіа до архіву'}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          style={{ height: '520px' }}
        >
          <Form
            form={form}
            onFinish={handleAddMedia}
            className="mt-8"
            name={'media-upload'}
            layout={'vertical'}
          >
            <Form.Item name={'title'} label={'Заголовок (назва фото)'}>
              <Input required />
            </Form.Item>
            <Form.Item name={'author'} label={'Автор фото'}>
              <Input required />
            </Form.Item>
            <Form.Item name={'desc'} label={'Опис фотографії'}>
              <Input required />
            </Form.Item>
            <Form.Item name={'image'}>
              <Input
                required
                type={'file'}
                onChange={handleImageChange}
                accept={'image/png, image/jpg, image/jpeg'}
              />
            </Form.Item>
            <Button
              htmlType={'submit'}
              className="bg-black pb-2 text-orange-300"
            >
              Зберегти
            </Button>
            <ErrorMessage message={error} />
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default AddMediaPost;
