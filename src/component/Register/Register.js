import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {
  const {createPasswordWithEmail,singInWithGoogle ,singInWithGithub,profileUpdata} =useContext(AuthContext)
  const [error,setError]=useState(null)
  const registionHandler =(event)=>{
    event.preventDefault()
    const form =event.target
    const name =form.name.value
    const email =form.email.value
    const password =form.password.value
    const photourl=form.photourl.value
    console.log(name,email,password,photourl)
    createPasswordWithEmail(email,password)
    .then(result=>{
      const user =result.user
      console.log(user)
      allUpdate(name,photourl)
      form.reset()

    })
    .catch(error=>{
      const errorMessage = error.message;
      setError(errorMessage)
      console.error("error",error)

     } )
    


  }

  const googleSingupHandler=()=>{
    const provider =new GoogleAuthProvider();
    singInWithGoogle(provider)
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
  const allUpdate=(name,photourl)=>{
    const profile={
      displayName:name,
      photoURL:photourl
    }
    profileUpdata(profile)
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
        <div className='form'>
            <Form onSubmit={registionHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control type="text" name='photourl' placeholder="Enter photourl" />
        
      </Form.Group>
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
      <p>Already you have account <Link to="/login">please logIn</Link></p>
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
    );
};

export default Register;