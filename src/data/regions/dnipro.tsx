import { Paths } from '@/paths';
import { Link } from 'react-router-dom';

export const regionDnipro = (
  <div className="flex flex-col gap-4">
    <Link to={Paths.dniproNews}>Дніпро</Link>
    <Link to={Paths.kryvyiRihNews}>Кривий Ріг</Link>
    <Link to={Paths.kamianskeNews}>Кам'янське</Link>
    <Link to={Paths.nikopolNews}>Нікополь</Link>
    <Link to={Paths.pavlogradNews}>Павлоград</Link>
    <Link to={Paths.novomoskovskNews}>Новомосковськ</Link>
    <Link to={Paths.zhovtiVodyNews}>Жовті Води</Link>
    <Link to={Paths.marganetsNews}>Марганець</Link>
    <Link to={Paths.pokrovNews}>Покров</Link>
    <Link to={Paths.sinelnikovoNews}>Синельникове</Link>
    <Link to={Paths.ternivkaNews}>Тернівка</Link>
    <Link to={Paths.pershotravenskNews}>Першотравенськ</Link>
    <Link to={Paths.vilnohorskNews}>Вільногірськ</Link>
    <Link to={Paths.pyatihatkyNews}>П'ятихатки</Link>
  </div>
);
