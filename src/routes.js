import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from "./home/home";
import ErrorBoundary from './error/react-err';
import AntGraph from "./ant-graph";

const router = createBrowserRouter([{
  path: '/', element: <Navigate to="/home" replace />,
}, {
  path: '/home', element: <ErrorBoundary><Home/></ErrorBoundary>,
},
  {
    path: '/ant-graph', element: <AntGraph/>,
  }
]);

const AllRouter = () => <RouterProvider router={router}/>

export default AllRouter;
