import { createRoot } from 'react-dom/client'
import './index.css' 
import MainLayout from './Layout/MainLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
