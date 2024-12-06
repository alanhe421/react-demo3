import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from "./home/home";
import ErrorBoundary from './error/react-err';
import AntGraph from "./ant-graph";
import AntGraph3D from "./ant-graph-3d";
import FormTest from "./form/index.";

const router = createBrowserRouter([{
  path: '/', element: <Navigate to="/home" replace />,
}, {
  path: '/home', element: <ErrorBoundary><Home/></ErrorBoundary>,
},
  {
    path: '/ant-graph', element: <AntGraph/>,
  },
  {
    path: '/ant-graph-3d', element: <AntGraph3D/>,
  },
  {
    path: '/form-test', element: <FormTest/>,
  }
]);

const AllRouter = () => <RouterProvider router={router}/>

export default AllRouter;
