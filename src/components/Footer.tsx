import React, { FC } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import LOGO from "../images/logo.png";
import { 
  FooterContainer,
  FooterWrapper,
  FooterLink,
  Title,
} from "../styles/Footer";
import { 
  SiInstagram,
  SiFacebook,
} from "react-icons/si"


export const Footer: FC = () => {
  return (
    <>
    <FooterContainer>
      <FooterWrapper>
        <Container fluid>
          <Row>
            <Col>
              <Navbar.Brand href="/obrien-home-improvement"> {/* company logo and brand */}
                <img 
                  className="company-logo"
                  src={LOGO}
                  alt="O'Brien Home Improvement"
                />
              </Navbar.Brand>
            </Col>
          </Row>
          <Row className="footer-row">
            <Col>
              <FooterLink href={process.env.PUBLIC_URL + "/contact"}>
                <Title>Contact</Title>
              </FooterLink>
                <p>
                  Alex Stobbelaar - Owner
                  <br />
                  homeimprovements.obrien@gmail.com
                  <br />
                  303-305-8433
                </p>
            </Col>
            <Col>
              <Title>Connect</Title>
              <SiInstagram className="social-media-icon"/>
              <SiFacebook className="social-media-icon"/>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
    </FooterContainer>
    </>
  );
};