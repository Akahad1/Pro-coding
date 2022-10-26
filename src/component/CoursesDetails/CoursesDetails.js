import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const data=useLoaderData()
    const {name,titel,img,body}= data
    
    return (
        <div className='mt-5 d-flex justify-content-center align-items-center'> 
            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <strong>{titel}</strong>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="dark"><Link >Get premiumaess</Link></Button>
      </Card.Body>
    </Card>
            
            
        </div>
    );
};

export default CoursesDetails;