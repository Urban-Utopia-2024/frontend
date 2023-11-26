import { useEffect, useState } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store';
import { selectCurrentUser, selectUserId } from '../store/auth/authSlice';
import { Routes } from '../constants/routes';
import { getUserById } from '../store/auth/authActions';

function RequireAuth({ require = true }) {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectCurrentUser);
  const userId = useAppSelector(selectUserId);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId)
      dispatch(getUserById(String(userId)))
        .unwrap()
        .finally(() => setIsLoading(false));
  }, [dispatch, userId]);

  if (isLoading) return <p>Loading...</p>;

  if (!isAuth && require) {
    return <Navigate to={Routes.LOGIN} state={{ from: location }} replace />;
  }
  if (isAuth && !require) {
    return <Navigate to={Routes.HOME} state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default RequireAuth;
