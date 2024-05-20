import { createBrowserRouter } from 'react-router-dom';
import { Auth } from '../modules/auth';
import { Home } from '../modules/home';
import { AuthProvider } from '../providers/AuthProvider';
import { Favorites } from '../modules/favorites';
import { ProtectedRouter } from '../components';
/* import { ProtectedRouter } from "../components/ProtectedRouter";  PARA ROTAS PROTEGIDAS*/

export const routers = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/home',
        element: <Home />,
      },

      {
        path: '/favoritos',
        element: (
          <ProtectedRouter>
            <Favorites />
          </ProtectedRouter>
        ),
      },
    ],
  },
]);
