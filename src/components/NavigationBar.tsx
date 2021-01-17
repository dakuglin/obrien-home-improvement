import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "../styles/Navigation";
import LOGO from "../images/logo.png";

export const NavigationBar: FC = () => {
  return (
    <>
    <Container>
      <Navbar expand="lg"> {/* responsive collapsing */}
        <Navbar.Brand href={process.env.PUBLIC_URL + "/"}> {/* company logo and brand */}
          <img 
            className="company-logo"
            src={LOGO}
            alt="O'Brien Home Improvement"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* collapse plugin (hamburger) */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* grouping and hiding navbar content @ breakpoint */}
          <Nav className="mr-auto navbar-nav">
            <Nav.Link href={process.env.PUBLIC_URL}><span>Home</span></Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/projects"}><span>Projects</span></Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/reviews"}><span>Reviews</span></Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/contact"}><span>Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </>
  );
};