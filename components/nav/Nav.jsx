'use client'

// 로그인, 로그아웃 기능을 위해 import
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
// 로그인 유무 확인을 위해 import
import { useSession } from "next-auth/react";
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// react-icons
import { FaMountain } from "react-icons/fa";
// scss
import './nav.scss'

function NavBar() {
  let session = useSession();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><FaMountain />Took-Peak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          <NavDropdown title="Took-Peak" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Took-Peak</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notice</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Search" id="basic-nav-dropdown">
              <NavDropdown.Item href="/search">학원 검색</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Message Board" id="basic-nav-dropdown">
              <NavDropdown.Item href="/board/free">자유게시판</NavDropdown.Item>
              <NavDropdown.Item href="/board/collaboration">협업게시판</NavDropdown.Item>
              <NavDropdown.Item href="/board/portfolio">포트폴리오 게시판</NavDropdown.Item>
              <NavDropdown.Item href="/board/question">질문게시판</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Dev" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">개발 팁</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">개발 기술</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">개발 면접</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
            {/* 로그인이 안 되어 있으면 로그인 버튼이, 되어있으면 로그아웃 버튼이 출력*/}
            {session.data == null ? 
            <Nav.Link className='signInOut' onClick={() => {
                    signIn();
                }}>Login</Nav.Link> 
                : <Nav.Link className='signInOut' onClick={() => {
                  signOut();
              }}>Logout</Nav.Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;