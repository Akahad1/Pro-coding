import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import "./Home.css"

const Home = () => {
    const {them}=useContext(AuthContext)
    return (
        <div id={them} className='home'>
            <div className='body'>
            {/* <p className='paragarg '><strong>Wellcome</strong> to our Pro-Courses</p> */}

            </div>
            
            
        </div>
    );
};

export default Home;