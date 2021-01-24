import React, { FC } from "react";
import LOGO from "../images/logo.png";
import { 
  Container, 
  Row, 
  Col,
} from "react-bootstrap";
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
        <Container fluid className="container">
          <Row lg={12} className="row"> 
            <Col className="col-lg-12">
              <a href="/obrien-home-improvement"> 
                <Img
                  src={LOGO}
                  alt="O'Brien Home Improvement"
                />
              </a>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col-md-12">
              <Row className="row">
                <div className="accordion d-lg-flex w-100" id="accordion">
                  <Col className="col-lg-4 col-md-12"> {/* column 1 */}
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
                    <div 
                      className="collapse d-lg-flex" 
                      id="contact" 
                      data-parent="#accordion"
                    >
                      <FooterContent>
                        <p>Alex O'Brien Stobbelaar - Owner</p>
                        <p>homeimprovements.obrien@gmail.com</p>
                        <p>303-305-8433</p>
                      </FooterContent>
                    </div>
                  </Col>
                  <Col className="col-lg-4 col-md-12"> {/* column 2 */}
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
                    <div 
                      className="collapse d-lg-flex" 
                      id="about" 
                      data-parent="#accordion">
                        <FooterContent>
                          <p>Free Estimates</p>
                          <p>Upfront Pricing</p>
                          <p>Licensed & Insured</p>
                        </FooterContent>
                    </div>
                  </Col>
                  <Col className="col-lg-4 col-md-12"> {/* column 3 */}
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
                    <div 
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
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
    </FooterContainer>
    </>
  );
};


// <FooterContainer className="footer-container">
//       <FooterWrapper>
//         <Container fluid>
//           <Row lg={12} className="row"> {/* first row logo */}
//             <Col className="col-lg-12">
//               <a href="/obrien-home-improvement"> 
//                 <Img
//                   src={LOGO}
//                   alt="O'Brien Home Improvement"
//                 />
//               </a>
//             </Col>
//           </Row>
//           <Row className="row"> {/* second row footer FooterTitles w/ FooterContent*/}
//             <Col lg={4} className="col-lg-4">
//             <FooterContent>
//               <FooterTitle>Contact</FooterTitle>
//               <p>Alex O'Brien Stobbelaar - Owner</p>
//               <p>homeimprovements.obrien@gmail.com</p>
//               <p>303-305-8433</p>
//               </FooterContent>
//             </Col>
//             <Col lg={4} className="col-lg-4">
//             <FooterContent>
//               <FooterTitle>About</FooterTitle>
//               <p>Free Estimates</p>
//               <p>Upfront Pricing</p>
//               <p>Licensed & Insured</p>
//               </FooterContent>
//             </Col>
//             <Col lg={4} className="col-lg-4">
//             <FooterContent>
//               <FooterTitle>Connect</FooterTitle>
//                 <a href="/#" target="_#" >
//                   <SiFacebook className="social-media-icon"/>
//                 </a>
//                 <a href="https://www.instagram.com/obrienhomeimprovement/?hl=en" target="_#">
//                   <SiInstagram className="social-media-icon"/>
//                 </a>
//               </FooterContent>
//             </Col>
//           </Row>
//         </Container>
//       </FooterWrapper>
//       <FooterCredit>
//         <Row>
//           <Col sm={12}>
//             <p> 
//               website designed by <a href="https://dana-weijers-portfolio.herokuapp.com/" target="_#"><span className="credit-link">dana weijers</span></a> 
//             </p>
//           </Col>
//         </Row>
//       </FooterCredit>
//     </FooterContainer>

