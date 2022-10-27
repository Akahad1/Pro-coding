import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import "./Course.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Course = ({courses}) => {
  
    const {name ,titel,img,id}=courses
    return (
        <div  className='container'>
            
            <div className='mx-5'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {titel}
        </Card.Text>
        <Button variant="dark"><Link to={`/courses/${id}`}>All Details</Link></Button>
      </Card.Body>
    </Card>
                
                

            </div>
            
        </div>
    );
};

export default Course;