import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppProvider from './context/AppContext/index.tsx';
import './index.css';
import HomePage from './pages/HomePage/index.tsx';
import InfoPage from './pages/InfoPage/index.tsx';
import JogsPage from './pages/JogsPage/index.tsx';
import NotFoundPage from './pages/NotFoundPage/index.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/jogs',
    element: <JogsPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>,
)
