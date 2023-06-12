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
import KyivTheNewsPage from './pages/News/RegionsNews/Kyiv/Kyiv/KyivTheNewsPage';
import BerezanTheNewsPage from './pages/News/RegionsNews/Kyiv/Berezan/BerezanTheNewsPage';
import BilaCerkvaTheNewsPage from './pages/News/RegionsNews/Kyiv/BilaCerkva/BilaCerkvaTheNewsPage';
import BoryspilTheNewsPage from './pages/News/RegionsNews/Kyiv/Boryspil/BoryspilTheNewsPage';
import BoyarkaTheNewsPage from './pages/News/RegionsNews/Kyiv/Boyarka/BoyarkaTheNewsPage';
import BrovaryTheNewsPage from './pages/News/RegionsNews/Kyiv/Brovary/BrovaryTheNewsPage';
import BuchaTheNewsPage from './pages/News/RegionsNews/Kyiv/Bucha/BuchaTheNewsPage';
import FastivTheNewsPage from './pages/News/RegionsNews/Kyiv/Fastiv/FastivTheNewsPage';
import IrpinTheNewsPage from './pages/News/RegionsNews/Kyiv/Irpin/IrpinTheNewsPage';
import ObukhivTheNewsPage from './pages/News/RegionsNews/Kyiv/Obuhiv/ObuhivTheNewsPage';
import PereyaslavTheNewsPage from './pages/News/RegionsNews/Kyiv/Pereyaslav/PereyaslavTheNewsPage';
import SkvyraTheNewsPage from './pages/News/RegionsNews/Kyiv/Skvyra/SkvyraTheNewsPage';
import SlavutychTheNewsPage from './pages/News/RegionsNews/Kyiv/Slavutych/SlavutychTheNewsPage';
import VyshneveTheNewsPage from './pages/News/RegionsNews/Kyiv/Vyshneve/VyshneveTheNewsPage';
import VyshhorodTheNewsPage from './pages/News/RegionsNews/Kyiv/Vyshhorod/VyshhorodTheNewsPage';
import YagotynTheNewsPage from './pages/News/RegionsNews/Kyiv/Yagotyn/YagotynTheNewsPage';
import VasylkivTheNewsPage from './pages/News/RegionsNews/Kyiv/Vasylkiv/VasylkivTheNewsPage';
import BilgorodDnistrovskyTheNewsPage from './pages/News/RegionsNews/Odesa/BilgorodDnistrovsky/BilgorodDnistrovskyTheNewsPage';
import ChornomorskTheNewsPage from './pages/News/RegionsNews/Odesa/Chornomorsk/ChornomorskTheNewsPage';
import IzmailTheNewsPage from './pages/News/RegionsNews/Odesa/Izmail/IzmailTheNewsPage';
import KiliyaTheNewsPage from './pages/News/RegionsNews/Odesa/Kiliya/KiliyaTheNewsPage';
import OdesaTheNewsPage from './pages/News/RegionsNews/Odesa/Odesa/OdesaTheNewsPage';
import PodilskTheNewsPage from './pages/News/RegionsNews/Odesa/Podilsk/PodilskTheNewsPage';
import YouzhneTheNewsPage from './pages/News/RegionsNews/Odesa/Youzhne/YouzhneTheNewsPage';
import BerezanNewsPage from './pages/News/RegionsNews/Kyiv/Berezan/BerezanNewsPage';
import BilaCerkvaNewsPage from './pages/News/RegionsNews/Kyiv/BilaCerkva/BilaCerkvaNewsPage';
import BoryspilNewsPage from './pages/News/RegionsNews/Kyiv/Boryspil/BoryspilNewsPage';
import BoyarkaNewsPage from './pages/News/RegionsNews/Kyiv/Boyarka/BoyarkaNewsPage';
import BrovaryNewsPage from './pages/News/RegionsNews/Kyiv/Brovary/BrovaryNewsPage';
import BuchaNewsPage from './pages/News/RegionsNews/Kyiv/Bucha/BuchaNewsPage';
import FastivNewsPage from './pages/News/RegionsNews/Kyiv/Fastiv/FastivNewsPage';
import IrpinNewsPage from './pages/News/RegionsNews/Kyiv/Irpin/IrpinNewsPage';
import KyivNewsPage from './pages/News/RegionsNews/Kyiv/Kyiv/KyivNewsPage';
import ObukhivNewsPage from './pages/News/RegionsNews/Kyiv/Obuhiv/ObuhivNewsPage';
import PereyaslavNewsPage from './pages/News/RegionsNews/Kyiv/Pereyaslav/PereyaslavNewsPage';
import SkvyraNewsPage from './pages/News/RegionsNews/Kyiv/Skvyra/SkvyraNewsPage';
import SlavutychNewsPage from './pages/News/RegionsNews/Kyiv/Slavutych/SlavutychNewsPage';
import VasylkivNewsPage from './pages/News/RegionsNews/Kyiv/Vasylkiv/VasylkivNewsPage';
import VyshhorodNewsPage from './pages/News/RegionsNews/Kyiv/Vyshhorod/VyshhorodNewsPage';
import VyshneveNewsPage from './pages/News/RegionsNews/Kyiv/Vyshneve/VyshneveNewsPage';
import YagotynNewsPage from './pages/News/RegionsNews/Kyiv/Yagotyn/YagotynNewsPage';
import BilgorodDnistrovskyNewsPage from './pages/News/RegionsNews/Odesa/BilgorodDnistrovsky/BilgorodDnistrovskyNewsPage';
import ChornomorskNewsPage from './pages/News/RegionsNews/Odesa/Chornomorsk/ChornomorskNewsPage';
import IzmailNewsPage from './pages/News/RegionsNews/Odesa/Izmail/IzmailNewsPage';
import KiliyaNewsPage from './pages/News/RegionsNews/Odesa/Kiliya/KiliyaNewsPage';
import OdesaNewsPage from './pages/News/RegionsNews/Odesa/Odesa/OdesaNewsPage';
import PodilskNewsPage from './pages/News/RegionsNews/Odesa/Podilsk/PodilskNewsPage';
import YouzhneNewsPage from './pages/News/RegionsNews/Odesa/Youzhne/YouzhneNewsPage';

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
  // Odesa
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
]);

// const cityNewsRoutes = cities.cities.map((city, index) => ({
//   id: `city-news-${index}`,
//   path: `${Paths[city + 'Posts']}`,
//   element: (
//     <PrivateRoute>
//       <PostsPage />
//     </PrivateRoute>
//   ),
// }));

// router.routes.push(...cityNewsRoutes);

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
