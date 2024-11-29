import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/index.tsx';
import NotFoundPage from './pages/NotFoundPage/index.tsx';
import JogsPage from './pages/JogsPage/index.tsx';
import InfoPage from './pages/InfoPage/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/jogs',
    element: <JogsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
