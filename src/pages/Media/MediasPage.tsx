import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Layout from '@/components/Layout/Layout';
import MediaCard from '@/components/Media/MediaCard';
import { useCurrentQuery } from '@/redux/services/auth';
import {
  useAddMediaMutation,
  useGetAllMediaQuery,
  useRemoveMediaMutation,
} from '@/redux/services/media';
import { Media } from '@/types/media';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { DeleteOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Spin,
  message,
} from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';

const MediasPage: FC = () => {
  const { data, isLoading, refetch } = useGetAllMediaQuery();
  const { data: user } = useCurrentQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteOpenModal] = useState(false);
  const [error, setError] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const [addMedia] = useAddMediaMutation();
  const [form] = Form.useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteMediaId, setDeleteMediaId] = useState<number | string | null>(
    null,
  );
  const [removeMedia] = useRemoveMediaMutation();

  const handleImageClick = (media: Media) => {
    setSelectedMedia(media);
    setIsModalVisible(true);
    setDeleteMediaId(media.id);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageFile(file);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Зображення успішно завантажено',
    });
  };
  const successDelete = () => {
    message.success('Медіафайл успішно видалено');
  };

  const handleAddMedia = async (data: Media) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('author', data.author);
      formData.append('desc', data.desc);
      formData.append('UserId', user?.id);
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

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDeleteModal = () => {
    setIsDeleteOpenModal(true);
  };
  const hideModal = () => {
    setIsDeleteOpenModal(false);
  };
  const handleDeleteMedia = async () => {
    hideModal();

    try {
      if (deleteMediaId) {
        await removeMedia(deleteMediaId).unwrap();
        setDeleteMediaId(null);
        successDelete();
        refetch();
        setIsModalVisible(false);
      }
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Unknow error');
      }
    }
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
      <Layout>
        {contextHolder}
        <div className="mx-auto mb-1 flex w-full max-w-[1200px] items-center">
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Медіа архів</h2>
              <Button type={'link'} onClick={showModal} className="text-black">
                Додати медіа до архіву
              </Button>
            </div>
            <div className="flex">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Пошук за назвою"
                className="mr-2"
                size={'small'}
              />
              <Button
                onClick={() => setSearchQuery('')}
                className="text-red-500"
                size={'middle'}
              >
                Очистити
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-5 max-w-[1200px] border-b border-black"></div>
        <Pagination
          current={currentPage}
          total={searchResults.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="mb-4 flex justify-end"
        />
        <div className="mx-auto mb-6 grid max-w-[1200px] grid-cols-5 items-center justify-between gap-6">
          {isLoading && <Spin />}
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
          {paginatedData.length > 0 &&
            paginatedData.map((data) => (
              <MediaCard
                key={data.id}
                id={data.id}
                desc={data.desc}
                author={data.author}
                userId={data.userId}
                imgUrl={data.imgUrl}
                title={data.title}
                onClick={() => handleImageClick(data)}
              />
            ))}
          <Modal
            title={'Медіа з архіву'}
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
            className="relative min-w-[1200px]"
            style={{ fontFamily: 'Inter' }}
          >
            {selectedMedia && (
              <>
                <Button
                  className="absolute right-14 top-[9px]"
                  type={'text'}
                  size={'middle'}
                  onClick={showDeleteModal}
                  icon={<DeleteOutlined />}
                  danger
                ></Button>
                <div className="border border-black"></div>
                <h2 className="mt-2">{selectedMedia.title}</h2>
                <div className="border"></div>
                <p>{selectedMedia.author}</p>
                <div className="border"></div>
                <p>{selectedMedia.desc}</p>
                <Image
                  preview={false}
                  className="mt-4 max-h-[740px] min-w-[1152px] object-cover"
                  src={selectedMedia.imgUrl}
                  alt={selectedMedia.title}
                />
              </>
            )}
          </Modal>
          <Modal
            title="Попередження"
            open={isDeleteModalOpen}
            onOk={handleDeleteMedia}
            onCancel={hideModal}
            okText={'Підтвердити'}
            cancelText={'Відміна'}
          >
            Ви дійсно хочете видалити медіафайл?
          </Modal>
        </div>
      </Layout>
    </>
  );
};

export default MediasPage;
