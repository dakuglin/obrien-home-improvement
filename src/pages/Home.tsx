import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { MainCarousel } from "../components/MainCarousel";
import { HeroTest } from "../components/HeroTest";
// import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { Team } from "../components/Team";


export const Home: FC = () => {

  // const url_1 = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

  // const url2="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg"

  return (
    <>
      {/*main page bootstrap container*/}
      <Container fluid>
        <Row>
          <Col lg={9}>
            <HeroTest />
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col lg={12}>
            <ServicesSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <Team />
          </Col>
        </Row>
        </Container>
     
    </>
  );
};
