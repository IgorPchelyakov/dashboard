import { Media } from '@/types/media';
import { Image } from 'antd';
import { FC } from 'react';

const PostMediaCard: FC<Media> = ({ id, imgUrl, onSelect }) => {
  const handleImageClick = () => {
    onSelect(imgUrl);
  };

  return (
    <>
      <Image
        key={id}
        src={imgUrl}
        preview={false}
        width={220}
        height={140}
        className="rounded-md object-cover"
        onClick={handleImageClick}
      />
    </>
  );
};

export default PostMediaCard;
