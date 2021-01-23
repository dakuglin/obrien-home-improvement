import React, { FC } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import LOGO from "../images/logo.png";
import { 
  FooterContainer,
  FooterWrapper,
  Img,
  FooterTitle,
  FooterContent,
  FooterCredit,
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
          {/* first row logo */}
          <Row className="test">
            <Col>
              <Navbar.Brand href="/obrien-home-improvement"> 
                <Img
                  src={LOGO}
                  alt="O'Brien Home Improvement"
                />
              </Navbar.Brand>
            </Col>
          </Row>
          {/* second row footer FooterTitles w/ FooterContent*/}
          <Row>
            <Col lg={4}>
            <FooterContent>
              <FooterTitle>Contact</FooterTitle>
              <p>Alex O'Brien Stobbelaar - Owner</p>
              <p>homeimprovements.obrien@gmail.com</p>
              <p>303-305-8433</p>
              </FooterContent>
            </Col>
            <Col lg={4}>
            <FooterContent>
              <FooterTitle>About</FooterTitle>
              <p>Free Estimates</p>
              <p>Upfront Pricing</p>
              <p>Licensed & Insured</p>
              </FooterContent>
            </Col>
            <Col lg={4}>
            <FooterContent>
              <FooterTitle>Connect</FooterTitle>
                <a href="/#" target="_#" >
                  <SiFacebook className="social-media-icon"/>
                </a>
                <a href="https://www.instagram.com/obrienhomeimprovement/?hl=en" target="_#">
                  <SiInstagram className="social-media-icon"/>
                </a>
              </FooterContent>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <FooterCredit>
        <Row>
          <Col sm={12}>
            <p> 
              website designed by <a href="https://dana-weijers-portfolio.herokuapp.com/" target="_#"><span className="credit-link">dana weijers</span></a> 
            </p>
          </Col>
        </Row>
      </FooterCredit>
    </FooterContainer>
    </>
  );
};
