import { Paths } from '@/paths';
import { News } from '@/types/news';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Image, Modal, message } from 'antd';
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useGetEmployeeQuery } from '@/redux/services/employees';
import {
  useGetAllNewsQuery,
  useRemoveNewsMutation,
} from '@/redux/services/news';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { useCurrentQuery } from '@/redux/services/auth';

const PostCard: FC<News> = ({
  id,
  publishedAt,
  feed,
  postType,
  section,
  title,
  views,
  UserId,
  mainImage,
  block,
  createdAt,
  updatedAt,
  url,
}) => {
  const navigate = useNavigate();
  const formatId = (id: string) => {
    if (id < '10') {
      return `000000${id}`;
    } else if (id < '100') {
      return `00000${id}`;
    } else if (id < '1000') {
      return `0000${id}`;
    } else if (id < '10000') {
      return `000${id}`;
    } else if (id < '100000') {
      return `00${id}`;
    } else if (id < '1000000') {
      return `0${id}`;
    } else if (id < '10000000') {
      return id;
    }
    return id;
  };
  const date = moment(publishedAt).format('DD.MM.YYYY');
  const time = moment(publishedAt).format('HH:mm');
  const isPublished = moment(publishedAt).isBefore(moment());
  const status = isPublished ? 'Опубліковано' : 'У черзі до стрічки';
  const { data } = useGetEmployeeQuery(UserId);

  const formattedFeed = feed.replace(/[\[\]",]/g, ' ');
  const uniqueWords = Array.from(new Set(formattedFeed.split(' ')));
  const uniqueFeed = uniqueWords.join(' ');

  const [removeNews] = useRemoveNewsMutation();
  const [isDeleteModalOpen, setIsDeleteOpenModal] = useState(false);
  const { refetch } = useGetAllNewsQuery();
  const [error, setError] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const { data: currentUser } = useCurrentQuery();

  const currentUserRole = currentUser?.role;
  const currentUserId = currentUser?.id;

  const publishedDate = moment(createdAt);
  const updatedDate = moment(updatedAt);

  const isUpdated = updatedDate.isAfter(publishedDate);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Публікацію видалено',
    });
  };

  const showDeleteModal = () => {
    setIsDeleteOpenModal(true);
  };
  const hideDeleteModal = () => {
    setIsDeleteOpenModal(false);
  };
  const handleDeletePost = async () => {
    hideDeleteModal();

    if (
      currentUserRole === 'Super Admin' ||
      currentUserRole === 'Головний редактор' ||
      currentUserRole === 'Журналіст головної редакції' ||
      currentUserRole === 'Редактор головної редакції' ||
      currentUserRole === 'Партнер ММ'
    ) {
      try {
        await removeNews(id).unwrap();
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
    } else if (
      currentUserRole === 'Кореспондент Київського МР' ||
      currentUserRole === 'Кореспондент Південного МР' ||
      currentUserRole === 'Кореспондент Дніпровського МР' ||
      currentUserRole === 'Кореспондент Східного МР' ||
      currentUserRole === 'Менеджер Київського МР' ||
      currentUserRole === 'Менеджер Південного МР' ||
      currentUserRole === 'Менеджер Дніпровського МР' ||
      currentUserRole === 'Менеджер Східного МР' ||
      currentUserRole === 'Менеджер Західного МР' ||
      currentUserRole === 'Редактор Київського МР' ||
      currentUserRole === 'Редактор Південного МР' ||
      currentUserRole === 'Редактор Дніпровського МР' ||
      currentUserRole === 'Редактор Східного МР' ||
      currentUserRole === 'Редактор Західного МР' ||
      (currentUserRole === 'Кореспондент Західного МР' &&
        currentUserId === UserId)
    ) {
      try {
        await removeNews(id).unwrap();
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
    }
  };

  return (
    <>
      {contextHolder}
      <Card className="mx-auto mb-8 max-w-[1200px]" size="small">
        <div className="flex">
          <div className="mr-4">
            <Image
              className="min-h-[153px] min-w-[162px] max-w-[162px] rounded-md object-cover"
              src={mainImage}
            />
          </div>
          <div className="h-full w-full">
            <div className="flex items-center justify-between">
              <div className="flex w-full items-center justify-between">
                <div className="w-full max-w-[600px] text-cyan-700">
                  <Link
                    to={`${Paths.publicNews}${url}`}
                    target={'_blank'}
                    className=" text-xl font-semibold"
                  >
                    {title}
                  </Link>
                </div>
                <Divider className="min-h-[60px]" type={'vertical'} />
                <div className="flex w-full flex-col gap-2">
                  <div className="flex gap-4 text-xl">
                    <div>ID: {formatId(id)}</div>
                    <div>
                      {data?.lastName} {data?.firstName} {data?.middleName}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      {date} о {time}
                    </div>
                    <div className="text-">
                      {isUpdated ? (
                        <div>{`Є оновлення: ${moment(updatedAt).format(
                          'DD.MM.YYYY о HH:mm',
                        )}`}</div>
                      ) : (
                        <div>Оновлення відсутні</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                {currentUserRole === 'Super Admin' ||
                currentUserRole === 'Головний редактор' ||
                currentUserRole === 'Редактор головної редакції' ||
                currentUserRole === 'Журналіст головної редакції' ||
                currentUserRole === 'Партнер ММ' ||
                (currentUserRole === 'Кореспондент Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Південного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Дніпровського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Східного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Західного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Дніпровського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Східного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Західного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Південного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Дніпровського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Східного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Західного МР' &&
                  currentUserId === UserId) ? (
                  <Button
                    type={'text'}
                    onClick={() => {
                      navigate(`${Paths.newsEdit}/${id}`);
                    }}
                    icon={<EditOutlined />}
                  ></Button>
                ) : null}
                {currentUserRole === 'Super Admin' ||
                currentUserRole === 'Головний редактор' ||
                currentUserRole === 'Редактор головної редакції' ||
                currentUserRole === 'Журналіст головної редакції' ||
                currentUserRole === 'Партнер ММ' ||
                (currentUserRole === 'Кореспондент Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Південного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Дніпровського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Східного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Кореспондент Західного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Дніпровського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Східного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Редактор Західного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Київського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Південного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Дніпровського МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Східного МР' &&
                  currentUserId === UserId) ||
                (currentUserRole === 'Менеджер Західного МР' &&
                  currentUserId === UserId) ? (
                  <Button
                    type={'text'}
                    icon={<DeleteOutlined />}
                    danger
                    onClick={showDeleteModal}
                  />
                ) : null}
              </div>
            </div>
            <Divider />
            <div className="flex h-full items-center gap-2">
              <div className="w-[200px]">{uniqueFeed}</div>
              <Divider className="min-h-[20px]" type={'vertical'} />
              <div className="w-[150px]">{postType}</div>
              <Divider className="min-h-[20px]" type={'vertical'} />
              <div className="w-[150px]">{section}</div>
              <Divider className="min-h-[20px]" type={'vertical'} />
              <div className="w-[150px]">{block}</div>
              <Divider className="min-h-[20px]" type={'vertical'} />
              <div className="w-[100px]">
                <EyeOutlined /> {views}
              </div>
              <div>{status}</div>
            </div>
          </div>
        </div>
        <Modal
          title="Попередження"
          open={isDeleteModalOpen}
          onOk={handleDeletePost}
          onCancel={hideDeleteModal}
          okText={'Підтвердити'}
          cancelText={'Відміна'}
        >
          Ви дійсно хочете видалити публікацію?
        </Modal>
      </Card>
    </>
  );
};

export default PostCard;
