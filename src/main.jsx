import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Layout/MainLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blogs/Blog';
import HomeLayout from './Layout/HomeLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
