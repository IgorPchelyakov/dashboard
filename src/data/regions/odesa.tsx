import { Paths } from '@/paths';
import { Link } from 'react-router-dom';

export const regionOdesa = (
  <div className="flex flex-col gap-4">
    <Link to={Paths.bilgorodDnistrovskyNews}>Білгород-Дністровський</Link>
    <Link to={Paths.chornomorskNews}>Чорноморськ</Link>
    <Link to={Paths.izmailNews}>Ізмаїл</Link>
    <Link to={Paths.kiliyaNews}>Кілія</Link>
    <Link to={Paths.odesaNews}>Одеса</Link>
    <Link to={Paths.podilskNews}>Подільск</Link>
    <Link to={Paths.youzhneNews}>Южне</Link>
  </div>
);
