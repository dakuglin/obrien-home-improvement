import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "../styles/Navigation";

export const NavigationBar: FC = () => {
  return (
    <>
    <Container>
      <Navbar expand="md"> {/* responsive collapsing */}
        <Navbar.Brand href="/obrien-home-improvement"> {/* company logo and brand */}
          <img 
            className="company-logo"
            src="https://cdn3.vectorstock.com/i/1000x1000/91/92/shamrock-logo-vector-7629192.jpg"
            alt="O'Brien Home Improvement"
          />{' '}
          O'Brien Home Improvement
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* collapse plugin (hamburger) */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* grouping and hiding navbar content @ breakpoint */}
          <Nav className="mr-auto main-nav_items">
            <Nav.Link href="/obrien-home-improvement">Home</Nav.Link>
            <Nav.Link href="/obrien-home-improvement/projects">Projects</Nav.Link>
            <Nav.Link href="/obrien-home-improvement/reviews">Reviews</Nav.Link>
            <Nav.Link href="/obrien-home-improvement/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </>
  );
};