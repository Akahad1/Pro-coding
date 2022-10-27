import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Course from '../Course/Course';

const Courses = () => {
    const coursess =useLoaderData()
    const {them}=createContext(AuthContext)
    return (
        <div id={them}>
            {
                 coursess.map(courses=><Course
                   key={courses.id} courses={courses}></Course>)

            }
          
            
            
        </div>
    );
};

export default Courses;