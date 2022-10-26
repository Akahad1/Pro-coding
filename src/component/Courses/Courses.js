import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const coursess =useLoaderData()
    return (
        <div>
            {
                 coursess.map(courses=><Course
                   key={courses.id} courses={courses}></Course>)

            }
          
            
            
        </div>
    );
};

export default Courses;