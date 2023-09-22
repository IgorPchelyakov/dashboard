import { News } from '@/types/news';
import { Employee } from '@/types/user';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Spin,
  Switch,
} from 'antd';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { blocks, feeds, postType, types } from '../../options';
import ReactQuill from 'react-quill';
import MainButton from '../../../Buttons/MainButton';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage';
import { FileImageOutlined } from '@ant-design/icons';
import { quillModules } from '../../quillModules';
import { useGetAllMediaQuery } from '@/redux/services/media';
import { Media } from '@/types/media';
import PostMediaQuillCard from '../../PostMediaQuillCard';
import AddMediaPost from '@/pages/News/AddMediaNews';
import PostMediaCard from '../../PostMediaCard';
import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';

dayjs.locale('uk');

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  error?: string;
  news?: T;
  employees: Employee[] | undefined;
};

interface ImageInfo {
  url: string;
  alt: string;
  author: string;
}

const EditFastivNewsForm: FC<Props<News>> = ({
  onFinish,
  btnText,
  error,
  news,
  employees,
}) => {
  const authors = employees?.map((employee) => ({
    value: employee.id,
    label: `${employee.lastName} ${employee.firstName}`,
  }));
  console.log(news?.id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalQuillOpen, setIsModalQuillOpen] = useState(false);

  const { data, isLoading } = useGetAllMediaQuery();

  const [selectedImage, setSelectedImage] = useState<ImageInfo>({
    url: news?.mainImage,
    alt: news?.mainImgDesc,
    author: news?.mainImgAuthor,
  });
  // eslint-disable-next-line
  const [selectedImageQuillUrl, setSelectedImageQuillUrl] = useState('');

  const [form] = Form.useForm();
  const quillRef = useRef<ReactQuill | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalQuill = () => {
    setIsModalQuillOpen(true);
  };
  const handleCancelQuill = () => {
    setIsModalQuillOpen(false);
  };
  const handleImageSelect = (imageInfo: ImageInfo) => {
    setSelectedImage(imageInfo);
    setIsModalOpen(false);
  };

  const handleImageQuillSelect = (imageInfo: ImageInfo) => {
    const { url, alt, author } = imageInfo;
    setSelectedImageQuillUrl(url);

    const editor = quillRef.current?.getEditor();
    if (editor) {
      const range = editor.getSelection(true);
      const quillImage = `<div><img src="${url}" alt="${alt}" <p>${alt} ${author}</p></div>`;
      editor.clipboard.dangerouslyPasteHTML(range.index, quillImage);
    }
    setIsModalQuillOpen(false);
  };

  const handleFinish = (values: News) => {
    const updatedValues = {
      ...values,
      mainImage: selectedImage.url,
      mainImgDesc: selectedImage.alt,
      mainImgAuthor: selectedImage.author,
    };
    onFinish(updatedValues);
  };

  const handleContentChange = (value: string) => {
    form.setFieldsValue({ content: value });
  };

  const CustomImageButton = () => {
    const handleOpenModal = () => {
      showModalQuill();
    };

    return (
      <button
        className="ql-custom-button hover:text-blue-700"
        onClick={handleOpenModal}
      >
        <FileImageOutlined className="mr-2" /> Додати зображення
      </button>
    );
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Media[]>([]);

  useEffect(() => {
    if (data) {
      const filteredMedia = data.filter((media: Media) =>
        media.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(filteredMedia);
    }
  }, [data, searchQuery]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 35;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return searchResults.slice(startIndex, endIndex);
  }, [currentPage, searchResults]);

  return (
    <>
      {news && (
        <div className="mx-auto mb-8 w-full max-w-[1200px] items-center">
          <div className="mb-6 border-b border-black pb-2 text-2xl font-bold">
            Редагувати публікацію
          </div>
          <Form
            name="form"
            onFinish={handleFinish}
            initialValues={{
              ...news,
              publishedAt: dayjs(news?.publishedAt),
            }}
            layout={'vertical'}
            size={'small'}
          >
            <div className="flex gap-4">
              <Form.Item name={'publishedAt'}>
                <DatePicker
                  locale={locale}
                  showTime
                  placeholder={'Оберіть дату'}
                />
              </Form.Item>
              <Form.Item name={'feed'}>
                <Cascader
                  disabled
                  style={{ width: '350px' }}
                  options={feeds}
                  placeholder={'Оберіть стрічку'}
                  maxTagCount="responsive"
                  showSearch
                  optionfilterprop="children"
                  filteroption={(input, option) =>
                    (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
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
                  placeholder={'Оберіть автора'}
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
            <div className="mb-6 border"></div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col">
                <Button onClick={showModal} className="mb-4">
                  Додати головне зображення
                </Button>
                <Form.Item name={'mainImage'}>
                  <Input
                    value={selectedImage.url}
                    onChange={(e) =>
                      setSelectedImage({
                        ...selectedImage,
                        url: e.target.value,
                      })
                    }
                    style={{ display: 'none' }}
                  />
                  <Image
                    src={selectedImage.url}
                    preview={false}
                    width={400}
                    height={200}
                    className="mt-4 rounded object-cover"
                  />
                </Form.Item>
              </div>
              <div className="flex w-full flex-col pt-14">
                <Form.Item label="Заголовок публікації" name={'title'}>
                  <Input />
                </Form.Item>
                <Form.Item label="Короткий опис публікації" name={'desc'}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name={'showDesc'}
                  label={'Приховувати/не приховувати короткий опис'}
                  className="mt-[-15px]"
                >
                  <Switch
                    size={'default'}
                    className="bg-black"
                    defaultChecked
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <Form.Item name={'imageSize'} label={'Вивести розміром 600'}>
                  <Switch size={'default'} className="bg-black" />
                </Form.Item>
              </div>
              <div className="flex justify-end gap-5">
                <Form.Item name={'showAuthorDesc'} label={'Додати опис автора'}>
                  <Switch size={'default'} className="bg-black" />
                </Form.Item>
                <Form.Item name={'showAuthor'} label={'Приховати автора'}>
                  <Switch size={'default'} className="bg-black" />
                </Form.Item>
                <Form.Item name={'live'} label={'Наживо'}>
                  <Switch disabled size={'default'} className="bg-black" />
                </Form.Item>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-[350px] top-3 z-[4]">
                <CustomImageButton />
              </div>
              <Form.Item name={'content'}>
                <ReactQuill
                  modules={quillModules}
                  onChange={handleContentChange}
                  ref={quillRef}
                />
              </Form.Item>
              <p className="mb-8 text-[10px] leading-[12px] text-gray-500">
                Матеріали, опубліковані у розділах: «Новини бізнесу», «Політичні
                новини», «Прес-реліз», «Офіційні повідомлення», - публікуються
                на правах реклами. Авторство повинно бути відсутнім, оскільки
                матеріал не є редакційним. Також авторство не відтворюється при
                створенні об’єднаної теми.
              </p>
            </div>
            <MainButton htmlType="submit">{btnText}</MainButton>
            <ErrorMessage message={error} />
          </Form>
          <Modal
            open={isModalOpen}
            title={'Медіа архів'}
            footer={null}
            onCancel={handleCancel}
            className="relative min-w-[1200px]"
          >
            <div className="mb-4 border border-black"></div>
            <div className="absolute left-[130px] top-[16px]">
              <AddMediaPost />
            </div>
            {isLoading && <Spin />}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Пошук за назвою"
                  className="mr-2"
                />
                <Button
                  onClick={() => setSearchQuery('')}
                  className="text-red-500"
                  size={'middle'}
                >
                  Очистити
                </Button>
              </div>
              <Pagination
                current={currentPage}
                total={searchResults.length}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
                className="mb-4 flex justify-end"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {paginatedData.length > 0 &&
                paginatedData.map((data) => (
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
          <Modal
            open={isModalQuillOpen}
            title={'Медіа архів'}
            footer={null}
            onCancel={handleCancelQuill}
            className="relative min-w-[1200px]"
          >
            <div className="mb-4 border border-black"></div>
            <div className="absolute left-[130px] top-[16px]">
              <AddMediaPost />
            </div>
            {isLoading && <Spin />}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Пошук за назвою"
                  className="mr-2"
                />
                <Button
                  onClick={() => setSearchQuery('')}
                  className="text-red-500"
                  size={'middle'}
                >
                  Очистити
                </Button>
              </div>
              <Pagination
                current={currentPage}
                total={searchResults.length}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
                className="mb-4 flex justify-end"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {paginatedData.length > 0 &&
                paginatedData.map((data) => (
                  <PostMediaQuillCard
                    key={data.id}
                    id={data.id}
                    desc={data.desc}
                    author={data.author}
                    userId={data.userId}
                    imgUrl={data.imgUrl}
                    title={data.title}
                    onSelect={handleImageQuillSelect}
                  />
                ))}
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditFastivNewsForm;
