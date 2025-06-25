import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Layout/MainLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/Contact/Contact'; 
import HomeLayout from './Layout/HomeLayout';
import Blogs from './pages/Blogs/Blogs';

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
        element: <Blogs />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
