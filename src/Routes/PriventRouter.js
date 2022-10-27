import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/AuthProvider/AuthProvider';

const PriventRouter = ({children}) => {
    const location=useLocation()
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <div>loding...</div>
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