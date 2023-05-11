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

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: Paths.login,
    element: <LoginPage />,
  },
  {
    path: Paths.home,
    element: <DashboardPage />,
  },
]);

root.render(
  <Provider store={store}>
    <ConfigProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ConfigProvider>
  </Provider>,
);
