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
import PostsPage from './pages/Posts/PostsPage';
import PostPage from './pages/Posts/PostPage';
import EditPostPage from './pages/Posts/EditPostPage';
import AddPostPage from './pages/Posts/AddPostPage';
import MediasPage from './pages/Media/MediasPage';
import BannersPage from './pages/Banners/BannersPage';
import BannerPage from './pages/Banners/BannerPage';
import BannerAddPage from './pages/Banners/BannerAddPage';

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
    path: `${Paths.posts}`,
    element: (
      <PrivateRoute>
        <PostsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.postAdd}`,
    element: (
      <PrivateRoute>
        <AddPostPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.post}/:id`,
    element: (
      <PrivateRoute>
        <PostPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${Paths.post}/edit/:id`,
    element: (
      <PrivateRoute>
        <EditPostPage />
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
