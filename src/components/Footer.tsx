import React, { FC } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import LOGO from "../images/logo.png";
import { 
  FooterContainer,
  FooterWrapper,
  Contact
} from "../styles/Footer";


export const Footer: FC = () => {
  return (
    <>
    <FooterContainer>
      <FooterWrapper>
        <Row>
          <Col>
            <Navbar.Brand href="/obrien-home-improvement"> {/* company logo and brand */}
              <img 
                className="company-logo"
                src={LOGO}
                alt="O'Brien Home Improvement"
              />
            </Navbar.Brand>
            <Contact>
              <h4>Contact</h4>
              <p> 303.305.8433</p>
              <p>homeimprovements.obrien@gmail.com</p>
              <p>address?</p>
            </Contact>
          </Col>
          <Col>
            <h4 className="services">Services</h4>
          </Col>
        </Row>
      </FooterWrapper>
    </FooterContainer>
    </>
  );
};