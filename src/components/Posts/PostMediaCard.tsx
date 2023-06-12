import { Media } from '@/types/media';
import { Image } from 'antd';
import { FC } from 'react';

const PostMediaCard: FC<Media> = ({ id, imgUrl, desc, author, onSelect }) => {
  const handleImageClick = () => {
    const imageInfo = {
      url: imgUrl,
      alt: desc,
      author: author,
    };
    onSelect(imageInfo);
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
