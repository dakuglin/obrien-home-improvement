import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Navigation } from "../styles/Navigation";

export const NavigationBar = () => {
  return (
    <Navigation>
    <Navbar >
      <Navbar.Brand href="/">O'Brien Home Improvement</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Navigation>
  );
};