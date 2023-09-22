import { Paths } from '@/paths';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import { regionKyiv } from './regions/kyiv';
import { regionOdesa } from './regions/odesa';
import { regionDnipro } from './regions/dnipro';

export const regions = (
  <div className="flex flex-col gap-4">
    <Link to={Paths.news}>Загальнонаціональна стрічка</Link>
    <Popover
      content={regionKyiv}
      trigger={'click'}
      title={'Київська область'}
      placement={'rightTop'}
      className="cursor-pointer hover:text-blue-400"
    >
      Київська область
    </Popover>
    <Popover
      content={regionOdesa}
      trigger={'click'}
      title={'Одеська область'}
      placement={'rightTop'}
      className="cursor-pointer hover:text-blue-400"
    >
      Одеська область
    </Popover>
    <Popover
      content={regionDnipro}
      trigger={'click'}
      title={'Дніпропетровська область'}
      placement={'rightTop'}
      className="cursor-pointer hover:text-blue-400"
    >
      Дніпропетровська область
    </Popover>
  </div>
);
