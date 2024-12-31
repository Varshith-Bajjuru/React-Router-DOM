import { createRoot } from 'react-dom/client';
import './index.css';
import { createRoutesFromElements ,createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Layout from './Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'
import Github from './pages/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path : "", 
        element: <Home />,
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/github",
        element : <Github/>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
