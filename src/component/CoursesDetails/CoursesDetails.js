import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CoursesDetails = () => {
  const {them}=useContext(AuthContext)
    const data=useLoaderData()
    const {name,titel,img,body,id}= data
    
    return (
        <div id={them} className=' d-flex justify-content-center align-items-center'> 
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <strong>{titel}</strong>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="dark"><Link to={`/chackout/${id}`} >Get premiumaess</Link></Button>
        <Button className='mx-3' variant="dark">Dowloaed pdf</Button>
        
      </Card.Body>
    </Card>
            
            
        </div>
    );
};

export default CoursesDetails;