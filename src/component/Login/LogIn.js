import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
  const {singInWithGoogle,singInWithGithub}=useContext(AuthContext)
  const navigate =useNavigate()


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
      navigate('/')
    })
    .catch(error=>{
      const errorMessage = error.message;
      // setError(errorMessage)
      console.error("error",error)
    })
    

  }
    return (
        <div>


            <div className='form'>
              <h1 className='text-info mb-3'>Log In</h1>
            <Form >
      
        
      
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
      {/* <p className='text-danger'>{error}</p> */}
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