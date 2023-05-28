import { Media } from '@/types/media';
import { Image } from 'antd';
import { FC } from 'react';

const PostMediaQuillCard: FC<Media> = ({
  id,
  imgUrl,
  onSelect,
  desc,
  author,
}) => {
  const handleImageQuillClick = () => {
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
        onClick={handleImageQuillClick}
      />
    </>
  );
};

export default PostMediaQuillCard;
