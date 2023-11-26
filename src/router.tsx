import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './constants/routes.ts';
import MapPage from './pages/MapPage.tsx';

const App = lazy(() => import('./App.tsx'));
const MainPage = lazy(() => import('./pages/MainPage.tsx'));
// const MapPage = lazy(() => import('./pages/MapPage.tsx'));
const NewsPage = lazy(() => import('./pages/NewsPage.tsx'));
const RequestsPage = lazy(() => import('./pages/RequestsPage.tsx'));
const AuthPage = lazy(() => import('./pages/AuthPage.tsx'));

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: Routes.HOME,
        element: <MainPage />,
      },
      {
        path: Routes.MAP,
        element: <MapPage />,
      },
      {
        path: Routes.NEWS,
        element: <NewsPage />,
      },
      {
        path: Routes.REQUESTS,
        element: <RequestsPage />,
      },
      {
        path: Routes.LOGIN,
        element: <AuthPage />,
      },
      {
        path: Routes.REGISTER,
        element: <AuthPage />,
      },
      {
        path: Routes.RESET,
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;
