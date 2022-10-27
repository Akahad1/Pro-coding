import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CouresLeftside.css'

const CourseLeftSide = () => {
   
    
    return (
        <div className='link-container'>
            
                <ul>
                    <li><Link to="/courses/01">Python</Link></li>
                    <li><Link to="/courses/02">Javascript</Link></li>
                    <li><Link to="/courses/03">Java</Link></li>
                    <li><Link to="/courses/04">PHP</Link></li>
                    <li><Link to="/courses/05">Ruby</Link></li>
                    <li><Link to="/courses/06">C#</Link></li>
                    

                </ul>
            
            
           
            
            
        </div>
    );
};

export default CourseLeftSide;