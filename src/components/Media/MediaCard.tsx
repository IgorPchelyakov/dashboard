import { Media } from '@/types/media';
import { Image, Modal } from 'antd';
import { FC } from 'react';

const MediaCard: FC<Media> = ({ id, imgUrl, onClick }) => {
  return (
    <>
      <Image
        key={id}
        src={imgUrl}
        preview={false}
        width={220}
        height={140}
        className="rounded-md object-cover"
        onClick={onClick}
      />
    </>
  );
};

export default MediaCard;
