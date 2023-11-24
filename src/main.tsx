import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store/index';
import router from './router.tsx';
import './index.css';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'OpenSans Regular',
        },
      }}
    >
      <Provider store={store}>
        <Suspense fallback={<p>Loading...</p>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
);
