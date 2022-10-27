import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserInformation = () => {
    const {user,them}=useContext(AuthContext)
    return (
        <div id={them}>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control readOnly defaultValue={user.displayName}  type="text"  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user.email}  type="email" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user.photoURL}  type="text" placeholder="Enter email" />
        
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        User Detalis
      </Button>
    </Form>
        </div>
    );
};

export default UserInformation;
