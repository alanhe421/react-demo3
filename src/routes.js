import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AntGraph from "./pages/ant-graph";
import AntGraph3D from "./pages/ant-graph-3d";
import ErrorBoundary from './pages/error/react-err';
import FormTest from "./pages/form/index.";
import Home from "./pages/home/home";
import MonacoEditor from "./pages/monaco-editor";
import Tanstack from "./pages/tanstack-test/index.";

export const routes=[{
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
    path: '/form', element: <FormTest/>,
  },
  {
    path: '/monaco-editor', element: <MonacoEditor/>,
  },
  {
    path: '/tanstack-test', element: <Tanstack/>,
  }
];

const router = createBrowserRouter(routes);

const AllRouter = () => <RouterProvider router={router}/>

export default AllRouter;
