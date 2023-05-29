import { FC } from 'react';
import { Banner } from '@/types/banner';
import { Card, Image } from 'antd';
import moment from 'moment';

const BannerCard: FC<Banner> = ({
  key,
  id,
  title,
  imgUrl,
  block,
  publishAt,
  endAt,
}) => {
  const date = moment(publishAt).format('DD.MM.YYYY');
  const time = moment(publishAt).format('HH:mm');
  const dateEnd = moment(endAt).format('DD.MM.YYYY');
  const timeEnd = moment(endAt).format('HH:mm');
  const isPublished = moment(publishAt).isBefore(moment());
  const status = isPublished ? 'У черзі до розміщення' : 'Розміщенний';
  return (
    <>
      <Card
        key={key}
        title={null}
        className="relative mx-auto mb-8 max-w-[1200px]"
      >
        <div className="flex justify-between pb-5">
          <h2 className="w-[270px]">{title}</h2>
          <Image
            src={`${imgUrl}`}
            width={115}
            height={70}
            className="w-[115px] rounded"
          />
          <p className="w-[270px]">{block}</p>
          <p className="w-[120px]">
            {date} {time}
          </p>
          <p className="w-[120px]">
            {dateEnd} {timeEnd}
          </p>
          <p className="w-[100px]">Вікторія Бур</p>
        </div>
        <div className="mb-5 border"></div>
        <div className="flex justify-end">{status}</div>
      </Card>
    </>
  );
};

export default BannerCard;
