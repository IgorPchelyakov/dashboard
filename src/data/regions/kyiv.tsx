import { Paths } from '@/paths';
import { Link } from 'react-router-dom';

export const regionKyiv = (
  <div className="flex flex-col gap-4">
    <Link to={Paths.berezanNews}>Березань</Link>
    <Link to={Paths.bilacerkvaNews}>Біла Церква</Link>
    <Link to={Paths.boryspilNews}>Бориспіль</Link>
    <Link to={Paths.boyarkaNews}>Боярка</Link>
    <Link to={Paths.brovaryNews}>Бровари</Link>
    <Link to={Paths.buchaNews}>Буча</Link>
    <Link to={Paths.fastivNews}>Фастів</Link>
    <Link to={Paths.irpinNews}>Ірпінь</Link>
    <Link to={Paths.kyivNews}>Київ</Link>
    <Link to={Paths.obukhivNews}>Обухів</Link>
    <Link to={Paths.pereyaslavNews}>Переяслав</Link>
    <Link to={Paths.skvyraNews}>Сквира</Link>
    <Link to={Paths.slavutychNews}>Славутич</Link>
    <Link to={Paths.vasylkivNews}>Васильків</Link>
    <Link to={Paths.vyshhorodNews}>Вишгород</Link>
    <Link to={Paths.vyshneveNews}>Вишневе</Link>
    <Link to={Paths.yagotynNews}>Яготин</Link>
  </div>
);
