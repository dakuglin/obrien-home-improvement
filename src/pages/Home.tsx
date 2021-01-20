import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainCarousel } from "../components/MainCarousel";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { HomePageWrapper } from "../styles/Home";


export const Home: FC = () => {

  return (
    <>
    <HomePageWrapper> {/*wrapper for styling on homepage */}
      {/*main page bootstrap container*/}
      <Container fluid>
        <Row>
          <Col lg={8}>
            <MainCarousel />
          </Col>
          <Col lg={4} className="col-4">
            <AboutSection />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ServicesSection />
          </Col>
        </Row>
      </Container>
    </HomePageWrapper>
    </>
  );
};
