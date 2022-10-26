import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../component/Bolg/Blog';
import Courses from '../component/Courses/Courses';
import Home from '../component/Home/Home';
import LogIn from '../component/Login/LogIn';
import Register from '../component/Register/Register';
import Main from '../layout/Main';
// import Blog from '../component/Blog/Blog';



 export const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/courses',element:<Courses></Courses>},
        {path:'/blog',element: <Blogs></Blogs>},
        {path:"/login",element:<LogIn></LogIn>},
        {path:"/register",element: <Register></Register>}
    ]
    
}

])