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
