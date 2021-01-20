import React, { FC } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import LOGO from "../images/logo.png";
import { 
  FooterContainer,
  FooterWrapper,
  Img,
  FooterTitle,
  FooterContent,
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
            <Col>
              <FooterTitle>Contact</FooterTitle>
              <FooterContent>
                <p>Alex O'Brien Stobbelaar - Owner</p>
                <p>homeimprovements.obrien@gmail.com</p>
                <p>303-305-8433</p>
              </FooterContent>
            </Col>
            <Col>
              <FooterTitle>About</FooterTitle>
              <FooterContent>
                <p>Free Estimates</p>
                <p>Licensed & Insured</p>
                <p>Upfront Pricing</p>
              </FooterContent>
            </Col>
            <Col>
              <FooterTitle>Connect</FooterTitle>
              <FooterContent>
                <SiFacebook className="social-media-icon"/>
                <SiInstagram className="social-media-icon"/>
              </FooterContent>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
    </FooterContainer>
    </>
  );
};
