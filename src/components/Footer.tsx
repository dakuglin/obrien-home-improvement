import React, { FC } from "react";
import LOGO from "../images/logo.png";
import { Container, Row, Col } from "react-bootstrap";
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
          <Row lg={12} className="row"> 
            <Col className="col-lg-12 logo">
              <a href="/"> 
                <Img
                  src={LOGO}
                  alt="O'Brien Home Improvement"
                />
              </a>
            </Col>
          </Row>
          <Row lg={12} className="row">
            <Col md={12}>
              <Row className="row">
                <Container className="accordion d-lg-flex w-100" id="accordion">
                  <Col className="col-lg-4"> {/* column 1 */}
                    <a 
                      href="#contact" 
                      className="h4 nav-link p-0 d-block d-lg-none d-xl-none" 
                      data-toggle="collapse"
                    >
                      Contact
                    </a>
                    <FooterTitle className="h4 d-none d-lg-block d-xl-block">
                      Contact
                    </FooterTitle>
                    <Container 
                      className="collapse d-lg-flex" 
                      id="contact" 
                      data-parent="#accordion"
                    >
                      <FooterContent>
                        <p>Alex O'Brien Stobbelaar - Owner</p>
                        <p>
                          <a href="mailto:homeimprovements.obrien@gmail.com" className="footer-contact">
                          homeimprovements.obrien@gmail.com
                          </a>
                        </p>
                        <p>
                          <a href="tel:3033058433" className="footer-contact">
                          303-305-8433
                          </a>
                        </p>
                      </FooterContent>
                    </Container>
                  </Col>
                  <Col className="col-lg-4"> {/* column 2 */}
                    <a 
                      href="#about" 
                      className="h4 nav-link p-0 d-block d-lg-none d-xl-none" 
                      data-toggle="collapse"
                    >
                      About
                    </a>
                    <FooterTitle className="h4 d-none d-lg-block d-xl-block">
                      About
                    </FooterTitle>
                    <Container 
                      className="collapse d-lg-flex" 
                      id="about" 
                      data-parent="#accordion">
                        <FooterContent>
                          <p>Free Estimates</p>
                          <p>Upfront Pricing</p>
                          <p>Licensed & Insured</p>
                        </FooterContent>
                    </Container>
                  </Col>
                  <Col className="col-lg-4"> {/* column 3 */}
                    <a 
                      href="#connect" 
                      className="h4 nav-link p-0 d-block d-lg-none d-xl-none" 
                      data-toggle="collapse"
                    >
                    Connect
                    </a>
                    <FooterTitle className="h4 d-none d-lg-block d-xl-block">
                      Connect
                    </FooterTitle>
                    <Container 
                      className="collapse d-lg-flex" 
                      id="connect" 
                      data-parent="#accordion"
                      >
                      <FooterContent>
                        <a href="/#" target="_#" >
                          <SiFacebook className="social-media-icon"/>
                        </a>
                        <a href="https://www.instagram.com/obrienhomeimprovement/?hl=en" target="_#">
                          <SiInstagram className="social-media-icon"/>
                        </a>
                      </FooterContent>
                    </Container>
                  </Col>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <FooterCredit>
        <Container fluid>
          <Row>
            <Col sm={12}>
              <p> 
                website designed by <a href="https://dana-weijers-portfolio.herokuapp.com/" target="_#"><span className="credit-link">dana weijers</span></a> 
              </p>
            </Col>
          </Row>
        </Container>
      </FooterCredit>
    </FooterContainer>
    </>
  );
};
