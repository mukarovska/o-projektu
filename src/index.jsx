import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { AboutTeam } from './pages/AboutTeam';
import { AboutProject } from './pages/AboutProject';
import { AboutMentor } from './pages/AboutMentor';

const App = () => {
  return (
    <>
      <div className="menu">
        {/* <h2 className="menu--nadpis">OSOBNOSTNÍ TESTY</h2> */}
        <Link className="menu--nadpis" to="/">
          OSOBNOSTNÍ TESTY
        </Link>
        <nav className="menu--seznam">
          <Link className="link" to="/">
            Úvodní stránka
          </Link>
          <span> | </span>
          <Link className="link" to="/about-team">
            NÁŠ TÝM
          </Link>
          <span> | </span>
          <Link className="link" to="/about-project">
            O PROJEKTU
          </Link>
          <span> | </span>
          <Link className="link" to="/about-mentor">
            MENTOR
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about-team', element: <AboutTeam /> },
      { path: 'about-project', element: <AboutProject /> },
      { path: 'about-mentor', element: <AboutMentor /> },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
