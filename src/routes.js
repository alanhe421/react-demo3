import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from "./home/home";
import ErrorBoundary from './error/react-err';


const router = createBrowserRouter([{
  path: '/', element: <Navigate to="/home" replace />,
}, {
  path: '/home', element: <ErrorBoundary><Home/></ErrorBoundary>,
}]);

const AllRouter = () => <RouterProvider router={router}/>

export default AllRouter;
