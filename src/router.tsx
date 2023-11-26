import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './constants/routes.ts';
import MapPage from './pages/MapPage.tsx';
import NewsItemPage from './pages/NewsItemPage.tsx';

const App = lazy(() => import('./App.tsx'));
const MainPage = lazy(() => import('./pages/MainPage.tsx'));
// const MapPage = lazy(() => import('./pages/MapPage.tsx'));
const NewsPage = lazy(() => import('./pages/NewsPage.tsx'));
const RequestsPage = lazy(() => import('./pages/RequestsPage.tsx'));
const LoginPage = lazy(() => import('./components/EntryForm.tsx'));
const RegPage = lazy(() => import('./components/RegistrationForm.tsx'));
const ApprovePage = lazy(() => import('./components/ui/ModalReg.tsx'));
const ResetPasswordPage = lazy(
  () => import('./components/PasswordResetForm.tsx'),
);
const ProfilePage = lazy(() => import('./pages/ProfilePage.tsx'));

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
        path: Routes.NEWS_ITEM,
        element: <NewsItemPage />,
      },
      {
        path: Routes.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: Routes.REQUESTS,
        element: <RequestsPage />,
      },
      {
        path: Routes.LOGIN,
        element: <LoginPage />,
      },
      {
        path: Routes.REGISTER,
        element: <RegPage />,
      },
      {
        path: Routes.RESET,
        element: <ResetPasswordPage />,
      },
      {
        path: Routes.APPROVE,
        element: <ApprovePage />,
      },
    ],
  },
]);

export default router;
