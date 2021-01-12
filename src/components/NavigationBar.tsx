import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavigationContainer } from "../styles/Navigation";

export const NavigationBar: FC = () => {
  return (
    <NavigationContainer>
    <Navbar>
      <Navbar.Brand href="/obrien-home-improvement">O'Brien Home Improvement</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/obrien-home-improvement">Home</Nav.Link>
          <Nav.Link href="/obrien-home-improvement/projects">Projects</Nav.Link>
          <Nav.Link href="/obrien-home-improvement/reviews">Reviews</Nav.Link>
          <Nav.Link href="/obrien-home-improvement/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </NavigationContainer>
  );
};