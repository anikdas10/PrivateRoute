import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home.jsx';
import Root from './assets/components/Root.jsx';
import Login from './assets/components/Login.jsx';
import Register from './assets/components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './assets/components/Orders.jsx';
import PrivateRoute from './assets/components/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router}>
   </RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
