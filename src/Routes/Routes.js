import { async } from '@firebase/util';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../component/Bolg/Blog';
import ChackOut from '../component/Chackout/ChackOut';
import Courses from '../component/Courses/Courses';
import CoursesDetails from '../component/CoursesDetails/CoursesDetails';
import Home from '../component/Home/Home';
import LogIn from '../component/Login/LogIn';
import Register from '../component/Register/Register';
import Main from '../layout/Main';
// import Blog from '../component/Blog/Blog';



 export const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/courses',element:<Courses></Courses>,
        loader:()=>fetch('http://localhost:5000/courses')
    },
        {path:'/blog',element: <Blogs></Blogs>},
        {path:"/login",element:<LogIn></LogIn>},
        {path:"/register",element: <Register></Register>},
        {path:"/courses/:id" ,element :<CoursesDetails></CoursesDetails>,
        loader: async({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
    
    },{path:"/chackout/:id",element:<ChackOut></ChackOut>,
    loader: async({params})=>fetch(`http://localhost:5000/courses/${params.id}`)

 }
    ]
    
},
{path:'*',element:"YOU RONG TEXT TYPING"}

])