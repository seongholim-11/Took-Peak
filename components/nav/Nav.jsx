'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Took-Peak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          <NavDropdown title="What is Took-Peak" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">What is Took-Peak</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notice</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Message Board" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">자유게시판</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">협업게시판</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">포트폴리오 게시판</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">질문게시판</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Search" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">학원 검색</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Dev" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">개발 팁</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">개발 기술</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">개발 면접</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" className='loginBtn'>Login</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;