import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PriventRouter = ({children}) => {
    const location=useLocation()
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <div>  <Spinner  animation="border" variant="info" /></div>
    }
    if(user){
        return children
      }
    return (
        <Navigate to="/login"  state={{from:location}} replace>

        </Navigate>
    );
};

export default PriventRouter;