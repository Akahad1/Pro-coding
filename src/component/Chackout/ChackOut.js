import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../AuthProvider/AuthProvider';


const ChackOut = () => {
  const {them}=createContext(AuthContext)
    const data =useLoaderData()
     const {titel,name,body,id}=data
    return (
        <div id={them}>
            <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>{titel}</Card.Title>
        <Card.Text>
          <div>ID: {id}</div>
        </Card.Text>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default ChackOut;