import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/skill.json')
            }
        ]
    }
])

export default Router;