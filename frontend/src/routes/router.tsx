// src/routes/router.tsx

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import List from '../pages/List';
import View from '../pages/View';
import Write from '../pages/Write';
import MyPage from '../pages/MyPage';
import Settings from '../pages/Settings';
import Export from '../pages/Export';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'list', element: <List /> },
      { path: 'view/:id', element: <View /> },
      { path: 'write', element: <Write /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'settings', element: <Settings /> },
      { path: 'export', element: <Export /> },
    ],
  },
]);

export default router;
