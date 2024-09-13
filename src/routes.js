import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./home/home";


const router = createBrowserRouter([{
  path: '/', element: <h1>123</h1>,
}, {
  path: '/home', element: <Home/>,
}]);

const AllRouter = () => <RouterProvider router={router}/>

export default AllRouter;
