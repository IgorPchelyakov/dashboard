import { Paths } from '@/paths';
import { Post } from '@/types/post';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Divider } from 'antd';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

const PostCard: FC<Post> = ({
  id,
  publishedAt,
  feed,
  postType,
  title,
  views,
  UserId,
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
  const status = isPublished ? 'У черзі до стрічки' : 'Опубліковано';

  return (
    <>
      <Card className="mx-auto mb-8 max-w-[1200px]">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="w-full max-w-[600px] text-cyan-700">
              <Link to={`${Paths.post}/${id}`}>{title}</Link>
            </div>
            <Divider className="min-h-[60px]" type={'vertical'} />
            <div className="flex w-full gap-4">
              <div>ID: {formatId(id)}</div>
              <div>
                {date} о {time}
              </div>
              <div>{UserId}</div>
            </div>
          </div>
          <div className="">
            <Button
              type={'text'}
              onClick={() => {
                navigate(`${Paths.postEdit}/${id}`);
              }}
              icon={<EditOutlined />}
            ></Button>
          </div>
        </div>
        <Divider />
        <div className="flex h-full items-center gap-2">
          <div className="w-[200px]">{feed}</div>
          <Divider className="min-h-[20px]" type={'vertical'} />
          <div className="w-[150px]">{postType}</div>
          <Divider className="min-h-[20px]" type={'vertical'} />
          <div className="w-[100px]">
            <EyeOutlined /> {views}
          </div>
          <div>{status}</div>
        </div>
      </Card>
    </>
  );
};

export default PostCard;
