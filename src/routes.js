import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from "./home/home";


const router = createBrowserRouter([{
  path: '/', element: <Navigate to="/home" replace />,
}, {
  path: '/home', element: <Home/>,
}]);

const AllRouter = () => <RouterProvider router={router}/>

export default AllRouter;
