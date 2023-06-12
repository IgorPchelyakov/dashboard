import { regions } from '@/data/regions';
import { Popover } from 'antd';
import { FC } from 'react';

const RegionsPopover: FC = () => {
  return (
    <>
      <Popover
        content={regions}
        trigger={'click'}
        title={'Оберіть стрічку'}
        className="cursor-pointer hover:text-blue-400"
      >
        Стрічка
      </Popover>
    </>
  );
};

export default RegionsPopover;
