import React, { useContext } from 'react';
import "./Header.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const {user}=useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' >
      <Container>
        <Image rounded src='../../../public/image.jpg'></Image>
        <Navbar.Brand href="#home" className='titel-name'>Pro Coding</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#pricing"><Link className='anhor' to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/faq'className='anhor'> FAQ</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link className='anhor' to="/blog">Blogs</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link className='anhor' to="/courses">Courses</Link></Nav.Link>
            
          </Nav>
          <Nav>
          

            <Nav.Link href="#deets"><Link  className='anhor' to='/register'>Register</Link></Nav.Link>
            {user?.uid ?
             <>
             <Nav.Link href="#deets"><Link  className='anhor' to='/register'>Log Out</Link></Nav.Link>
             <Nav.Link href="#pricing"><Image rounded src={user.photoURL}></Image></Nav.Link>
             
             
             </>
              :<>
             <Link to='/login'>Log In</Link>
             <Link to='/register'>Register</Link></> }
            
            <Nav.Link eventKey={2} href="#memes">
             
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Header;