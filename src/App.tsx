import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppProvider from './context/AppContext';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import JogsPage from './pages/JogsPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';

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
  {
    path: '/contact-us',
    element: <ContactsPage />,
    errorElement: <NotFoundPage />,
  }
]);

function App() {

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
