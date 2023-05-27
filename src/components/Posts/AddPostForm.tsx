import { FC, useRef, useState } from 'react';
import { Post } from '@/types/post';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Image,
  Input,
  Modal,
  Select,
  Spin,
  Switch,
} from 'antd';
import { blocks, feeds, postType, types } from './options';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Employee } from '@/types/user';
import MainButton from '../Buttons/MainButton';
import { useGetAllMediaQuery } from '@/redux/services/media';
import PostMediaCard from './PostMediaCard';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FileImageOutlined } from '@ant-design/icons';
import { quillModules } from './quillModules';

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  post?: T;
  employees: Employee[] | undefined;
};

const AddPostForm: FC<Props<Post>> = ({
  onFinish,
  btnText,
  title,
  error,
  post,
  employees,
}) => {
  const authors = employees?.map((employee) => ({
    value: employee.id,
    label: `${employee.lastName} ${employee.firstName}`,
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetAllMediaQuery();

  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleFinish = (values) => {
    const updatedValues = { ...values, mainImage: selectedImageUrl };
    onFinish(updatedValues);
  };

  const handleContentChange = (value) => {
    form.setFieldsValue({ content: value });
  };

  return (
    <>
      <div className="mx-auto mb-8 max-w-[1200px] items-center">
        <Form
          name="form"
          onFinish={handleFinish}
          initialValues={post}
          layout={'vertical'}
          size={'small'}
        >
          <div className="flex gap-4">
            <Form.Item name={'publishedAt'}>
              <DatePicker showTime placeholder={'Оберіть дату'} />
            </Form.Item>
            <Form.Item name={'feed'}>
              <Cascader
                style={{ width: '350px' }}
                options={feeds}
                placeholder={'Оберіть стрічку'}
                multiple
                maxTagCount="responsive"
              />
            </Form.Item>
            <Form.Item name={'postType'}>
              <Select
                placeholder={'Оберіть тип публікації'}
                style={{ width: '300px' }}
                options={postType}
              />
            </Form.Item>
            <Form.Item name={'block'}>
              <Select
                placeholder={'Оберіть блок'}
                style={{ width: '300px' }}
                options={blocks}
              />
            </Form.Item>
          </div>
          <div className="flex gap-4">
            <Form.Item name={'section'}>
              <Select
                placeholder={'Оберіть розділ'}
                style={{ width: '300px' }}
                options={types}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Form.Item>
            <Form.Item name={'UserId'}>
              <Select
                showSearch
                mode={'multiple'}
                placeholder={'Оберіть автора / співавтора'}
                style={{ width: '300px' }}
                options={authors}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Form.Item>
          </div>
          <Form.Item label="Заголовок публікації" name={'title'}>
            <Input />
          </Form.Item>
          <Form.Item label="Короткий опис" name={'desc'}>
            <Input />
          </Form.Item>
          <Button onClick={showModal}>Додати фото</Button>
          <Form.Item label="Головне зображення" name={'mainImage'}>
            <Input
              value={selectedImageUrl}
              onChange={(e) => e.target.value}
              style={{ display: 'none' }}
            />
            <Image
              src={selectedImageUrl}
              preview={false}
              width={200}
              height={200}
              className="mt-4 object-cover"
            />
          </Form.Item>
          <Form.Item name={'imageSize'} label={'Вивести розміром 600'}>
            <Switch size={'default'} className="bg-black" />
          </Form.Item>
          {/* TODO: */}
          <Form.Item label="Контент" name={'content'}>
            <ReactQuill modules={quillModules} onChange={handleContentChange} />
          </Form.Item>
          <Form.Item name={'showAuthorDesc'} label={'Додати опис автора'}>
            <Switch size={'default'} className="bg-black" />
          </Form.Item>
          <Form.Item name={'showAuthor'} label={'Приховати автора'}>
            <Switch size={'default'} className="bg-black" />
          </Form.Item>
          <Form.Item name={'live'} label={'Наживо'}>
            <Switch size={'default'} className="bg-black" />
          </Form.Item>
          <MainButton htmlType="submit">{btnText}</MainButton>
          <ErrorMessage message={error} />
        </Form>
        <Modal
          open={isModalOpen}
          title={'Медіа архів'}
          footer={null}
          onCancel={handleCancel}
          className="min-w-[1200px]"
        >
          <div className="mb-4 border border-black"></div>
          {isLoading && <Spin />}
          <div className="grid grid-cols-5 gap-4">
            {data &&
              data.map((data) => (
                <PostMediaCard
                  key={data.id}
                  id={data.id}
                  desc={data.desc}
                  author={data.author}
                  userId={data.userId}
                  imgUrl={data.imgUrl}
                  title={data.title}
                  onSelect={handleImageSelect}
                />
              ))}
          </div>
        </Modal>
        <Form.Item label="Контент" name={'content'}>
          {/* Quill editor code */}
        </Form.Item>
      </div>
    </>
  );
};

export default AddPostForm;
