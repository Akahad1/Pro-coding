import React, { useContext, useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReactPrint from "react-to-print"
import ReactToPrint from 'react-to-print';

const CoursesDetails = () => {
  const {them}=useContext(AuthContext)
    const data=useLoaderData()
    const {name,titel,img,body,id}= data
    const ref = useRef()
    
    return (
        <div ref={ref} id={them} className=' d-flex justify-content-center align-items-center'> 
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <strong>{titel}</strong>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="dark"><Link to={`/chackout/${id}`} >Get premiumaess</Link></Button>
        <ReactToPrint trigger={()=><Button className='mx-3' variant="dark">Dowloaed pdf</Button>} content={()=>ref.current}> </ReactToPrint>
        
        
      </Card.Body>
    </Card>
            
            
        </div>
    );
};

export default CoursesDetails;