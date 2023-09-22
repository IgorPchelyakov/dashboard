import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Paths } from './paths';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { ConfigProvider } from 'antd';
import Auth from './redux/features/login/auth';
import EmployeesPage from './pages/EmployeesPage';
import PrivateRoute from './utils/router/privateRoute';
import AddEmployeePage from './pages/AddEmployeePage';
import CreateStatus from './pages/status/createStatus';
import EmployeePage from './pages/EmployeePage';
import EditEmployeePage from './pages/EditEmployeePage';
import EditPostPage from './pages/News/EditNewsPage';
import MediasPage from './pages/Media/MediasPage';
import BannersPage from './pages/Banners/BannersPage';
import BannerPage from './pages/Banners/BannerPage';
import BannerAddPage from './pages/Banners/BannerAddPage';
import TheNewsPage from './pages/News/TheNewsPage';
import AddNewsPage from './pages/News/AddNewsPage';
import NewsPage from './pages/News/NewsPage';
import EditNewsPage from './pages/News/EditNewsPage';
// Kyiv region
// Berezan
import BerezanTheNewsPage from './pages/News/RegionsNews/Kyiv/Berezan/BerezanTheNewsPage';
import BerezanNewsPage from './pages/News/RegionsNews/Kyiv/Berezan/BerezanNewsPage';
import EditBerezanNewsPage from './pages/News/RegionsNews/Kyiv/Berezan/EditBerezanNewsPage';
// Bilacerkva
import BilaCerkvaTheNewsPage from './pages/News/RegionsNews/Kyiv/BilaCerkva/BilaCerkvaTheNewsPage';
import BilaCerkvaNewsPage from './pages/News/RegionsNews/Kyiv/BilaCerkva/BilaCerkvaNewsPage';
import EditBilaCerkvaNewsPage from './pages/News/RegionsNews/Kyiv/BilaCerkva/EditBilaCerkvaNewsPage';
// Boryspil
import BoryspilTheNewsPage from './pages/News/RegionsNews/Kyiv/Boryspil/BoryspilTheNewsPage';
import BoryspilNewsPage from './pages/News/RegionsNews/Kyiv/Boryspil/BoryspilNewsPage';
import EditBoryspilNewsPage from './pages/News/RegionsNews/Kyiv/Boryspil/EditBoryspilNewsPage';
// Boyarka
import BoyarkaTheNewsPage from './pages/News/RegionsNews/Kyiv/Boyarka/BoyarkaTheNewsPage';
import BoyarkaNewsPage from './pages/News/RegionsNews/Kyiv/Boyarka/BoyarkaNewsPage';
import EditBoyarkaNewsPage from './pages/News/RegionsNews/Kyiv/Boyarka/EditBoyarkaNewsPage';
// Brovary
import BrovaryTheNewsPage from './pages/News/RegionsNews/Kyiv/Brovary/BrovaryTheNewsPage';
import BrovaryNewsPage from './pages/News/RegionsNews/Kyiv/Brovary/BrovaryNewsPage';
import EditBrovaryNewsPage from './pages/News/RegionsNews/Kyiv/Brovary/EditBrovaryNewsPage';
// Bucha
import BuchaTheNewsPage from './pages/News/RegionsNews/Kyiv/Bucha/BuchaTheNewsPage';
import BuchaNewsPage from './pages/News/RegionsNews/Kyiv/Bucha/BuchaNewsPage';
import EditBuchaNewsPage from './pages/News/RegionsNews/Kyiv/Bucha/EditBuchaNewsPage';
// Fastiv
import FastivTheNewsPage from './pages/News/RegionsNews/Kyiv/Fastiv/FastivTheNewsPage';
import FastivNewsPage from './pages/News/RegionsNews/Kyiv/Fastiv/FastivNewsPage';
import EditFastivNewsPage from './pages/News/RegionsNews/Kyiv/Fastiv/EditFastivNewsPage';
// Irpin
import IrpinTheNewsPage from './pages/News/RegionsNews/Kyiv/Irpin/IrpinTheNewsPage';
import IrpinNewsPage from './pages/News/RegionsNews/Kyiv/Irpin/IrpinNewsPage';
import EditIrpinNewsPage from './pages/News/RegionsNews/Kyiv/Irpin/EditIrpinNewsPage';
// Kyiv
import KyivTheNewsPage from './pages/News/RegionsNews/Kyiv/Kyiv/KyivTheNewsPage';
import KyivNewsPage from './pages/News/RegionsNews/Kyiv/Kyiv/KyivNewsPage';
import EditKyivNewsPage from './pages/News/RegionsNews/Kyiv/Kyiv/EditKyivNewsPage';
// Obukhiv
import ObukhivTheNewsPage from './pages/News/RegionsNews/Kyiv/Obuhiv/ObuhivTheNewsPage';
import ObukhivNewsPage from './pages/News/RegionsNews/Kyiv/Obuhiv/ObuhivNewsPage';
import EditObukhivNewsPage from './pages/News/RegionsNews/Kyiv/Obuhiv/EditObuhivNewsPage';
// Pereyaslav
import PereyaslavTheNewsPage from './pages/News/RegionsNews/Kyiv/Pereyaslav/PereyaslavTheNewsPage';
import PereyaslavNewsPage from './pages/News/RegionsNews/Kyiv/Pereyaslav/PereyaslavNewsPage';
import EditPereyaslavNewsPage from './pages/News/RegionsNews/Kyiv/Pereyaslav/EditPereyaslavNewsPage';
// Skvyra
import SkvyraTheNewsPage from './pages/News/RegionsNews/Kyiv/Skvyra/SkvyraTheNewsPage';
import SkvyraNewsPage from './pages/News/RegionsNews/Kyiv/Skvyra/SkvyraNewsPage';
import EditSkvyraNewsPage from './pages/News/RegionsNews/Kyiv/Skvyra/EditSkvyraNewsPage';
// Slavutych
import SlavutychTheNewsPage from './pages/News/RegionsNews/Kyiv/Slavutych/SlavutychTheNewsPage';
import SlavutychNewsPage from './pages/News/RegionsNews/Kyiv/Slavutych/SlavutychNewsPage';
import EditSlavutychNewsPage from './pages/News/RegionsNews/Kyiv/Slavutych/EditSlavutychNewsPage';
// Vasylkiv
import VasylkivTheNewsPage from './pages/News/RegionsNews/Kyiv/Vasylkiv/VasylkivTheNewsPage';
import VasylkivNewsPage from './pages/News/RegionsNews/Kyiv/Vasylkiv/VasylkivNewsPage';
import EditVasylkivNewsPage from './pages/News/RegionsNews/Kyiv/Vasylkiv/EditVasylkivNewsPage';
// Vyshhorod
import VyshhorodTheNewsPage from './pages/News/RegionsNews/Kyiv/Vyshhorod/VyshhorodTheNewsPage';
import VyshhorodNewsPage from './pages/News/RegionsNews/Kyiv/Vyshhorod/VyshhorodNewsPage';
import EditVyshhorodNewsPage from './pages/News/RegionsNews/Kyiv/Vyshhorod/EditVyshhorodNewsPage';
// Vyshneve
import VyshneveTheNewsPage from './pages/News/RegionsNews/Kyiv/Vyshneve/VyshneveTheNewsPage';
import VyshneveNewsPage from './pages/News/RegionsNews/Kyiv/Vyshneve/VyshneveNewsPage';
import EditVyshneveNewsPage from './pages/News/RegionsNews/Kyiv/Vyshneve/EditVyshneveNewsPage';
// Yagotyn
import YagotynTheNewsPage from './pages/News/RegionsNews/Kyiv/Yagotyn/YagotynTheNewsPage';
import YagotynNewsPage from './pages/News/RegionsNews/Kyiv/Yagotyn/YagotynNewsPage';
import EditYagotynNewsPage from './pages/News/RegionsNews/Kyiv/Yagotyn/EditYagotynNewsPage';
// Odesa Region
// BilgorodDnistrovsky
import BilgorodDnistrovskyTheNewsPage from './pages/News/RegionsNews/Odesa/BilgorodDnistrovsky/BilgorodDnistrovskyTheNewsPage';
import BilgorodDnistrovskyNewsPage from './pages/News/RegionsNews/Odesa/BilgorodDnistrovsky/BilgorodDnistrovskyNewsPage';
import EditBilgorodDnistrovskyNewsPage from './pages/News/RegionsNews/Odesa/BilgorodDnistrovsky/EditBilgorodDnistrovskyNewsPage';
// Chornomorsk
import ChornomorskTheNewsPage from './pages/News/RegionsNews/Odesa/Chornomorsk/ChornomorskTheNewsPage';
import ChornomorskNewsPage from './pages/News/RegionsNews/Odesa/Chornomorsk/ChornomorskNewsPage';
import EditChornomorskNewsPage from './pages/News/RegionsNews/Odesa/Chornomorsk/EditChornomorskNewsPage';
// Izmail
import IzmailTheNewsPage from './pages/News/RegionsNews/Odesa/Izmail/IzmailTheNewsPage';
import IzmailNewsPage from './pages/News/RegionsNews/Odesa/Izmail/IzmailNewsPage';
import EditIzmailNewsPage from './pages/News/RegionsNews/Odesa/Izmail/EditIzmailNewsPage';
// Kiliya
import KiliyaTheNewsPage from './pages/News/RegionsNews/Odesa/Kiliya/KiliyaTheNewsPage';
import KiliyaNewsPage from './pages/News/RegionsNews/Odesa/Kiliya/KiliyaNewsPage';
import EditKiliyNewsPage from './pages/News/RegionsNews/Odesa/Kiliya/EditKiliyaNewsPage';
// Odesa
import OdesaTheNewsPage from './pages/News/RegionsNews/Odesa/Odesa/OdesaTheNewsPage';
import OdesaNewsPage from './pages/News/RegionsNews/Odesa/Odesa/OdesaNewsPage';
import EditOdesaNewsPage from './pages/News/RegionsNews/Odesa/Odesa/EditOdesaNewsPage';
// Podilsk
import PodilskTheNewsPage from './pages/News/RegionsNews/Odesa/Podilsk/PodilskTheNewsPage';
import PodilskNewsPage from './pages/News/RegionsNews/Odesa/Podilsk/PodilskNewsPage';
import EditPodilskNewsPage from './pages/News/RegionsNews/Odesa/Podilsk/EditPodilskNewsPage';
// Youzhne
import YouzhneTheNewsPage from './pages/News/RegionsNews/Odesa/Youzhne/YouzhneTheNewsPage';
import YouzhneNewsPage from './pages/News/RegionsNews/Odesa/Youzhne/YouzhneNewsPage';
import EditYouzhneNewsPage from './pages/News/RegionsNews/Odesa/Youzhne/EditYouzhneNewsPage';
// Dnipro Region
// Dnipro
import DniproTheNewsPage from './pages/News/RegionsNews/Dnipro/Dnipro/DniproTheNewsPage';
import DniproNewsPage from './pages/News/RegionsNews/Dnipro/Dnipro/DniproNewsPage';
import EditDniproNewsPage from './pages/News/RegionsNews/Dnipro/Dnipro/EditDniproNewsPage';
// Kamianske
import KamianskeTheNewsPage from './pages/News/RegionsNews/Dnipro/Kamianske/KamianskeTheNewsPage';
import KamianskeNewsPage from './pages/News/RegionsNews/Dnipro/Kamianske/KamianskeNewsPage';
import EditKamianskeNewsPage from './pages/News/RegionsNews/Dnipro/Kamianske/EditKamianskeNewsPage';
// KryvyiRih
import KryvyiRihTheNewsPage from './pages/News/RegionsNews/Dnipro/KryvyiRih/KryvyiRihTheNewsPage';
import KryvyiRihNewsPage from './pages/News/RegionsNews/Dnipro/KryvyiRih/KryvyiRihNewsPage';
import EditKryvyiRihNewsPage from './pages/News/RegionsNews/Dnipro/KryvyiRih/EditKryvyiRihNewsPage';
// Marganets
import MarganetsTheNewsPage from './pages/News/RegionsNews/Dnipro/Marganets/MarganetsTheNewsPage';
import MarganetsNewsPage from './pages/News/RegionsNews/Dnipro/Marganets/MarganetsNewsPage';
import EditMarganetsNewsPage from './pages/News/RegionsNews/Dnipro/Marganets/EditMarganetsNewsPage';
// Nikopol
import NikopolTheNewsPage from './pages/News/RegionsNews/Dnipro/Nikopol/NikopolTheNewsPage';
import NikopolNewsPage from './pages/News/RegionsNews/Dnipro/Nikopol/NikopolNewsPage';
import EditNikopolNewsPage from './pages/News/RegionsNews/Dnipro/Nikopol/EditNikopolNewsPage';
// Novomoskovsk
import NovomoskovskTheNewsPage from './pages/News/RegionsNews/Dnipro/Novomoskovsk/NovomoskovskTheNewsPage';
import NovomoskovskNewsPage from './pages/News/RegionsNews/Dnipro/Novomoskovsk/NovomoskovskNewsPage';
import EditNovomoskovskNewsPage from './pages/News/RegionsNews/Dnipro/Novomoskovsk/EditNovomoskovskNewsPage';
// Pavlograd
import PavlogradTheNewsPage from './pages/News/RegionsNews/Dnipro/Pavlograd/PavlogradTheNewsPage';
import PavlogradNewsPage from './pages/News/RegionsNews/Dnipro/Pavlograd/PavlogradNewsPage';
import EditPavlogradNewsPage from './pages/News/RegionsNews/Dnipro/Pavlograd/EditPavlogradNewsPage';
// Pereyaslav
import PershotravenskTheNewsPage from './pages/News/RegionsNews/Dnipro/Pershotravensk/PershotravenskTheNewsPage';
import PershotravenskNewsPage from './pages/News/RegionsNews/Dnipro/Pershotravensk/PershotravenskNewsPage';
import EditPershotravenskNewsPage from './pages/News/RegionsNews/Dnipro/Pershotravensk/EditPershotravenskNewsPage';
// Pokrov
import PokrovTheNewsPage from './pages/News/RegionsNews/Dnipro/Pokrov/PokrovTheNewsPage';
import PokrovNewsPage from './pages/News/RegionsNews/Dnipro/Pokrov/PokrovNewsPage';
import EditPokrovNewsPage from './pages/News/RegionsNews/Dnipro/Pokrov/EditPokrovNewsPage';
// Pyatihatky
import PyatihatkyTheNewsPage from './pages/News/RegionsNews/Dnipro/Pyatihatky/PyatihatkyTheNewsPage';
import PyatihatkyNewsPage from './pages/News/RegionsNews/Dnipro/Pyatihatky/PyatihatkyNewsPage';
import EditPyatihatkyNewsPage from './pages/News/RegionsNews/Dnipro/Pyatihatky/EditPyatihatkyNewsPage';
// Sinelnikovo
import SinelnikovoTheNewsPage from './pages/News/RegionsNews/Dnipro/Sinelnikovo/SinelnikovoTheNewsPage';
import SinelnikovoNewsPage from './pages/News/RegionsNews/Dnipro/Sinelnikovo/SinelnikovoNewsPage';
import EditSinelnikovoNewsPage from './pages/News/RegionsNews/Dnipro/Sinelnikovo/EditSinelnikovoNewsPage';
// Ternivka
import TernivkaTheNewsPage from './pages/News/RegionsNews/Dnipro/Ternivka/TernivkaTheNewsPage';
import TernivkaNewsPage from './pages/News/RegionsNews/Dnipro/Ternivka/TernivkaNewsPage';
import EditTernivkaNewsPage from './pages/News/RegionsNews/Dnipro/Ternivka/EditTernivkaNewsPage';
// Vilnohorsk
import VilnohorskTheNewsPage from './pages/News/RegionsNews/Dnipro/Vilnohorsk/VilnohorskTheNewsPage';
import VilnohorskNewsPage from './pages/News/RegionsNews/Dnipro/Vilnohorsk/VilnohorskNewsPage';
import EditVilnohorskNewsPage from './pages/News/RegionsNews/Dnipro/Vilnohorsk/EditVilnohorskNewsPage';
// ZhovtiVody
import ZhovtiVodyTheNewsPage from './pages/News/RegionsNews/Dnipro/ZhovtiVody/ZhovtiVodyTheNewsPage';
import ZhovtiVodyNewsPage from './pages/News/RegionsNews/Dnipro/ZhovtiVody/ZhovtiVodyNewsPage';
import EditZhovtiVodyNewsPage from './pages/News/RegionsNews/Dnipro/ZhovtiVody/EditZhovtiVodyNewsPage';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: Paths.login,
    element: <LoginPage />,
  },
  {
    path: Paths.home,
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: Paths.employees,
    element: (
      <PrivateRoute>
        <EmployeesPage />
      </PrivateRoute>
    ),
  },
  {
    path: Paths.employeeAdd,
    element: (
      <PrivateRoute>
        <AddEmployeePage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.status}/:status`,
    element: (
      <PrivateRoute>
        <CreateStatus />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.employee}/:id`,
    element: (
      <PrivateRoute>
        <EmployeePage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.employeeEdit}/:id`,
    element: (
      <PrivateRoute>
        <EditEmployeePage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.news}`,
    element: (
      <PrivateRoute>
        <TheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.newsAdd}`,
    element: (
      <PrivateRoute>
        <AddNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.news}/:id`,
    element: (
      <PrivateRoute>
        <NewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.news}/edit/:id`,
    element: (
      <PrivateRoute>
        <EditNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.banners}`,
    element: (
      <PrivateRoute>
        <BannersPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.bannerAdd}`,
    element: (
      <PrivateRoute>
        <BannerAddPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.banner}/:id`,
    element: (
      <PrivateRoute>
        <BannerPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.banner}/edit/:id`,
    element: (
      <PrivateRoute>
        <EditPostPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.media}`,
    element: (
      <PrivateRoute>
        <MediasPage />
      </PrivateRoute>
    ),
  },
  // Kyiv
  // Berezan
  {
    path: `${Paths.berezanNews}`,
    element: (
      <PrivateRoute>
        <BerezanTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.berezanNews}/:id`,
    element: (
      <PrivateRoute>
        <BerezanNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBerezanNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBerezanNewsPage />
      </PrivateRoute>
    ),
  },
  // Bilacerkva
  {
    path: `${Paths.bilacerkvaNews}`,
    element: (
      <PrivateRoute>
        <BilaCerkvaTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.bilacerkvaNews}/:id`,
    element: (
      <PrivateRoute>
        <BilaCerkvaNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBilacerkvaNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBilaCerkvaNewsPage />
      </PrivateRoute>
    ),
  },
  // Boryspil
  {
    path: `${Paths.boryspilNews}`,
    element: (
      <PrivateRoute>
        <BoryspilTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.boryspilNews}/:id`,
    element: (
      <PrivateRoute>
        <BoryspilNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBoryspilNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBoryspilNewsPage />
      </PrivateRoute>
    ),
  },
  // Boyarka
  {
    path: `${Paths.boyarkaNews}`,
    element: (
      <PrivateRoute>
        <BoyarkaTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.boyarkaNews}/:id`,
    element: (
      <PrivateRoute>
        <BoyarkaNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBoyarkaNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBoyarkaNewsPage />
      </PrivateRoute>
    ),
  },
  // Brovary
  {
    path: `${Paths.brovaryNews}`,
    element: (
      <PrivateRoute>
        <BrovaryTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.brovaryNews}/:id`,
    element: (
      <PrivateRoute>
        <BrovaryNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBrovaryNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBrovaryNewsPage />
      </PrivateRoute>
    ),
  },
  // Bucha
  {
    path: `${Paths.buchaNews}`,
    element: (
      <PrivateRoute>
        <BuchaTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.buchaNews}/:id`,
    element: (
      <PrivateRoute>
        <BuchaNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBuchaNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBuchaNewsPage />
      </PrivateRoute>
    ),
  },
  // Fastiv
  {
    path: `${Paths.fastivNews}`,
    element: (
      <PrivateRoute>
        <FastivTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.fastivNews}/:id`,
    element: (
      <PrivateRoute>
        <FastivNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editFastivNews}/:id`,
    element: (
      <PrivateRoute>
        <EditFastivNewsPage />
      </PrivateRoute>
    ),
  },
  // Irpin
  {
    path: `${Paths.irpinNews}`,
    element: (
      <PrivateRoute>
        <IrpinTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.irpinNews}/:id`,
    element: (
      <PrivateRoute>
        <IrpinNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editIrpinNews}/:id`,
    element: (
      <PrivateRoute>
        <EditIrpinNewsPage />
      </PrivateRoute>
    ),
  },
  // Kyiv
  {
    path: `${Paths.kyivNews}`,
    element: (
      <PrivateRoute>
        <KyivTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.kyivNews}/:id`,
    element: (
      <PrivateRoute>
        <KyivNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editKyivNews}/:id`,
    element: (
      <PrivateRoute>
        <EditKyivNewsPage />
      </PrivateRoute>
    ),
  },
  // Obukhiv
  {
    path: `${Paths.obukhivNews}`,
    element: (
      <PrivateRoute>
        <ObukhivTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.obukhivNews}/:id`,
    element: (
      <PrivateRoute>
        <ObukhivNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editObukhivNews}/:id`,
    element: (
      <PrivateRoute>
        <EditObukhivNewsPage />
      </PrivateRoute>
    ),
  },
  // Pereyaslav
  {
    path: `${Paths.pereyaslavNews}`,
    element: (
      <PrivateRoute>
        <PereyaslavTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.pereyaslavNews}/:id`,
    element: (
      <PrivateRoute>
        <PereyaslavNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editPereyaslavNews}/:id`,
    element: (
      <PrivateRoute>
        <EditPereyaslavNewsPage />
      </PrivateRoute>
    ),
  },
  // Skvyra
  {
    path: `${Paths.skvyraNews}`,
    element: (
      <PrivateRoute>
        <SkvyraTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.skvyraNews}/:id`,
    element: (
      <PrivateRoute>
        <SkvyraNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editSkvyraNews}/:id`,
    element: (
      <PrivateRoute>
        <EditSkvyraNewsPage />
      </PrivateRoute>
    ),
  },
  // Slavutych
  {
    path: `${Paths.slavutychNews}`,
    element: (
      <PrivateRoute>
        <SlavutychTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.slavutychNews}/:id`,
    element: (
      <PrivateRoute>
        <SlavutychNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editSlavutychNews}/:id`,
    element: (
      <PrivateRoute>
        <EditSlavutychNewsPage />
      </PrivateRoute>
    ),
  },
  // Vasylkiv
  {
    path: `${Paths.vasylkivNews}`,
    element: (
      <PrivateRoute>
        <VasylkivTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.vasylkivNews}/:id`,
    element: (
      <PrivateRoute>
        <VasylkivNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editVasylkivNews}/:id`,
    element: (
      <PrivateRoute>
        <EditVasylkivNewsPage />
      </PrivateRoute>
    ),
  },
  // Vyshhorod
  {
    path: `${Paths.vyshhorodNews}`,
    element: (
      <PrivateRoute>
        <VyshhorodTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.vyshhorodNews}/:id`,
    element: (
      <PrivateRoute>
        <VyshhorodNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editVyshhorodNews}/:id`,
    element: (
      <PrivateRoute>
        <EditVyshhorodNewsPage />
      </PrivateRoute>
    ),
  },
  // Vyshneve
  {
    path: `${Paths.vyshneveNews}`,
    element: (
      <PrivateRoute>
        <VyshneveTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.vyshneveNews}/:id`,
    element: (
      <PrivateRoute>
        <VyshneveNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editVyshneveNews}/:id`,
    element: (
      <PrivateRoute>
        <EditVyshneveNewsPage />
      </PrivateRoute>
    ),
  },
  // Yagotyn
  {
    path: `${Paths.yagotynNews}`,
    element: (
      <PrivateRoute>
        <YagotynTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.yagotynNews}/:id`,
    element: (
      <PrivateRoute>
        <YagotynNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editYagotynNews}/:id`,
    element: (
      <PrivateRoute>
        <EditYagotynNewsPage />
      </PrivateRoute>
    ),
  },
  // Odesa
  // BilgorodDnistrovsky
  {
    path: `${Paths.bilgorodDnistrovskyNews}`,
    element: (
      <PrivateRoute>
        <BilgorodDnistrovskyTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.bilgorodDnistrovskyNews}/:id`,
    element: (
      <PrivateRoute>
        <BilgorodDnistrovskyNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editBilgorodDnistrovskyNews}/:id`,
    element: (
      <PrivateRoute>
        <EditBilgorodDnistrovskyNewsPage />
      </PrivateRoute>
    ),
  },
  // Chornomorsk
  {
    path: `${Paths.chornomorskNews}`,
    element: (
      <PrivateRoute>
        <ChornomorskTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.chornomorskNews}/:id`,
    element: (
      <PrivateRoute>
        <ChornomorskNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editChornomorskNews}/:id`,
    element: (
      <PrivateRoute>
        <EditChornomorskNewsPage />
      </PrivateRoute>
    ),
  },
  // Izmail
  {
    path: `${Paths.izmailNews}`,
    element: (
      <PrivateRoute>
        <IzmailTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.izmailNews}/:id`,
    element: (
      <PrivateRoute>
        <IzmailNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editIzmailNews}/:id`,
    element: (
      <PrivateRoute>
        <EditIzmailNewsPage />
      </PrivateRoute>
    ),
  },
  // Kiliya
  {
    path: `${Paths.kiliyaNews}`,
    element: (
      <PrivateRoute>
        <KiliyaTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.kiliyaNews}/:id`,
    element: (
      <PrivateRoute>
        <KiliyaNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editKiliyaNews}/:id`,
    element: (
      <PrivateRoute>
        <EditKiliyNewsPage />
      </PrivateRoute>
    ),
  },
  // Odesa
  {
    path: `${Paths.odesaNews}`,
    element: (
      <PrivateRoute>
        <OdesaTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.odesaNews}/:id`,
    element: (
      <PrivateRoute>
        <OdesaNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editOdesaNews}/:id`,
    element: (
      <PrivateRoute>
        <EditOdesaNewsPage />
      </PrivateRoute>
    ),
  },
  // Podilsk
  {
    path: `${Paths.podilskNews}`,
    element: (
      <PrivateRoute>
        <PodilskTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.podilskNews}/:id`,
    element: (
      <PrivateRoute>
        <PodilskNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editPodilskNews}/:id`,
    element: (
      <PrivateRoute>
        <EditPodilskNewsPage />
      </PrivateRoute>
    ),
  },
  // Youzhne
  {
    path: `${Paths.youzhneNews}`,
    element: (
      <PrivateRoute>
        <YouzhneTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.youzhneNews}/:id`,
    element: (
      <PrivateRoute>
        <YouzhneNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editYouzhneNews}/:id`,
    element: (
      <PrivateRoute>
        <EditYouzhneNewsPage />
      </PrivateRoute>
    ),
  },
  // Dnipro Region
  // Dnipro
  {
    path: `${Paths.dniproNews}`,
    element: (
      <PrivateRoute>
        <DniproTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.dniproNews}/:id`,
    element: (
      <PrivateRoute>
        <DniproNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editDniproNews}/:id`,
    element: (
      <PrivateRoute>
        <EditDniproNewsPage />
      </PrivateRoute>
    ),
  },
  // Kamianske
  {
    path: `${Paths.kamianskeNews}`,
    element: (
      <PrivateRoute>
        <KamianskeTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.kamianskeNews}/:id`,
    element: (
      <PrivateRoute>
        <KamianskeNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editKamianskeNews}/:id`,
    element: (
      <PrivateRoute>
        <EditKamianskeNewsPage />
      </PrivateRoute>
    ),
  },
  // KryvyiRih
  {
    path: `${Paths.kryvyiRihNews}`,
    element: (
      <PrivateRoute>
        <KryvyiRihTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.kryvyiRihNews}/:id`,
    element: (
      <PrivateRoute>
        <KryvyiRihNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editKryvyiRihNews}/:id`,
    element: (
      <PrivateRoute>
        <EditKryvyiRihNewsPage />
      </PrivateRoute>
    ),
  },
  // Marganets
  {
    path: `${Paths.marganetsNews}`,
    element: (
      <PrivateRoute>
        <MarganetsTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.marganetsNews}/:id`,
    element: (
      <PrivateRoute>
        <MarganetsNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editMarganetsNews}/:id`,
    element: (
      <PrivateRoute>
        <EditMarganetsNewsPage />
      </PrivateRoute>
    ),
  },
  // Nikopol
  {
    path: `${Paths.nikopolNews}`,
    element: (
      <PrivateRoute>
        <NikopolTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.nikopolNews}/:id`,
    element: (
      <PrivateRoute>
        <NikopolNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editNikopolNews}/:id`,
    element: (
      <PrivateRoute>
        <EditNikopolNewsPage />
      </PrivateRoute>
    ),
  },
  // Novomoskovsk
  {
    path: `${Paths.novomoskovskNews}`,
    element: (
      <PrivateRoute>
        <NovomoskovskTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.novomoskovskNews}/:id`,
    element: (
      <PrivateRoute>
        <NovomoskovskNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editNovomoskovskNews}/:id`,
    element: (
      <PrivateRoute>
        <EditNovomoskovskNewsPage />
      </PrivateRoute>
    ),
  },
  // Pavlograd
  {
    path: `${Paths.pavlogradNews}`,
    element: (
      <PrivateRoute>
        <PavlogradTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.pavlogradNews}/:id`,
    element: (
      <PrivateRoute>
        <PavlogradNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editPavlogradNews}/:id`,
    element: (
      <PrivateRoute>
        <EditPavlogradNewsPage />
      </PrivateRoute>
    ),
  },
  // Pershotravensk
  {
    path: `${Paths.pershotravenskNews}`,
    element: (
      <PrivateRoute>
        <PershotravenskTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.pershotravenskNews}/:id`,
    element: (
      <PrivateRoute>
        <PershotravenskNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editPershotravenskNews}/:id`,
    element: (
      <PrivateRoute>
        <EditPershotravenskNewsPage />
      </PrivateRoute>
    ),
  },
  // Pokrov
  {
    path: `${Paths.pokrovNews}`,
    element: (
      <PrivateRoute>
        <PokrovTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.pokrovNews}/:id`,
    element: (
      <PrivateRoute>
        <PokrovNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editPokrovNews}/:id`,
    element: (
      <PrivateRoute>
        <EditPokrovNewsPage />
      </PrivateRoute>
    ),
  },
  // Pyatihatky
  {
    path: `${Paths.pyatihatkyNews}`,
    element: (
      <PrivateRoute>
        <PyatihatkyTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.pyatihatkyNews}/:id`,
    element: (
      <PrivateRoute>
        <PyatihatkyNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editPyatihatkyNews}/:id`,
    element: (
      <PrivateRoute>
        <EditPyatihatkyNewsPage />
      </PrivateRoute>
    ),
  },
  // Sinelnikovo
  {
    path: `${Paths.sinelnikovoNews}`,
    element: (
      <PrivateRoute>
        <SinelnikovoTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.sinelnikovoNews}/:id`,
    element: (
      <PrivateRoute>
        <SinelnikovoNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editSinelnikovoNews}/:id`,
    element: (
      <PrivateRoute>
        <EditSinelnikovoNewsPage />
      </PrivateRoute>
    ),
  },
  // Ternivka
  {
    path: `${Paths.ternivkaNews}`,
    element: (
      <PrivateRoute>
        <TernivkaTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.ternivkaNews}/:id`,
    element: (
      <PrivateRoute>
        <TernivkaNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editTernivkaNews}/:id`,
    element: (
      <PrivateRoute>
        <EditTernivkaNewsPage />
      </PrivateRoute>
    ),
  },
  // Vilnohorsk
  {
    path: `${Paths.vilnohorskNews}`,
    element: (
      <PrivateRoute>
        <VilnohorskTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.vilnohorskNews}/:id`,
    element: (
      <PrivateRoute>
        <VilnohorskNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editVilnohorskNews}/:id`,
    element: (
      <PrivateRoute>
        <EditVilnohorskNewsPage />
      </PrivateRoute>
    ),
  },
  // ZhovtiVody
  {
    path: `${Paths.zhovtiVodyNews}`,
    element: (
      <PrivateRoute>
        <ZhovtiVodyTheNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.zhovtiVodyNews}/:id`,
    element: (
      <PrivateRoute>
        <ZhovtiVodyNewsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.editZhovtiVodyNews}/:id`,
    element: (
      <PrivateRoute>
        <EditZhovtiVodyNewsPage />
      </PrivateRoute>
    ),
  },
]);

root.render(
  <Provider store={store}>
    <ConfigProvider>
      <Auth>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Auth>
    </ConfigProvider>
  </Provider>,
);
