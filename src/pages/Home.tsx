import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import { MainCarousel } from "../components/MainCarousel";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { HomeContainer } from "../styles/Home";


export const Home: FC = () => {

  return (
    <>
    {/*main page */}
    <HomeContainer>
    <Container fluid> {/* fluid container with hero and about section */}
      <Row>
        <Col lg={8}>
          <MainCarousel />
        </Col>
        <Col className="col-4" lg={4}>
          <AboutSection />
        </Col>
      </Row>
    </Container>
    <Container fluid> {/* fluid container with services */}
      <Row>
        <Col lg={12}>
          <ServicesSection />
        </Col>
      </Row>
    </Container>
    </HomeContainer>
    </>
  );
};
