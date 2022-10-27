import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../component/AuthProvider/AuthProvider';
import CourseLeftSide from '../component/CouresLftside/CourseLeftSide';
import Header from '../component/Header/Header';

const Coueselayout = () => {
    const {them}=useContext(AuthContext)
    return (
        <div id={them}>
            <Header></Header>
            <Row>
                <Col lg="3" className='bg-info  lg: d-block'>
                    <CourseLeftSide></CourseLeftSide>
                </Col>
                <Col>
                <Outlet></Outlet>
                </Col>
                
            </Row>
            
        </div>
    );
};

export default Coueselayout;