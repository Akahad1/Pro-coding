import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
  const {singInWithGoogle,singInWithGithub,login}=useContext(AuthContext)
  const [error,setError]=useState(null)

  
  const location =useLocation()
  const navigate=useNavigate()
  const from =location.state?.from?.pathname || '/'


  const singInHandler=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    login(email,password)
    .then(result=>{
      const user=result.user
      console.log(user)
      form.reset()
      navigate(from, {replace:true})
    })
    .catch(error=>{
      console.error("error",error)
      const errorMessage = error.message;
      setError(errorMessage)
    })
   }




  const googleSingupHandler=()=>{
    const provider =new GoogleAuthProvider();
    singInWithGoogle(provider)
    .then(result=>{
      const user =result.user
      console.log(user)
    })
    .catch(error=>console.error("error",error))
  }
  const githubSingInHandler=()=>{
    const githubProvider =new GithubAuthProvider()
    singInWithGithub(githubProvider)
    .then(result=>{
      const user =result.user
      console.log(user)
     
    })
    .catch(error=>{
      const errorMessage = error.message;
      setError(errorMessage)
      console.error("error",error)
    })
    
    

  }
    return (
        <div>


            <div className='form'>
              <h1 className='text-info mb-3'>Log In</h1>
            <Form onSubmit={singInHandler}>
      
        
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p> Have not Your  account <Link to="/register">please Register</Link></p>
      <p className='text-danger'>{error}</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    <div className='mt-2 lg: d-flex justify-content-center'>
    <Button onClick={githubSingInHandler} variant="outline-dark"> <FaGithub />  Sing In with Github</Button>
      <Button onClick={googleSingupHandler} className='mx-4' variant="outline-info"> <FaGoogle /> Sing In with Google</Button>
    </div>
            
        </div>
        </div>
    );
};

export default LogIn;