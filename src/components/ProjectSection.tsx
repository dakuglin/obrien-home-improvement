import React, { FC } from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { ProjectSectionContainer, Title } from "../styles/ProjectSection";
import { Hero } from "../components/Hero";

export const ProjectSection: FC = () => {
  return (
    <>
    <ProjectSectionContainer>
      <Title>Projects</Title>
      <Container fluid>
      <Row>
        <Col className="row justify-content-center">
          <Card>
            <Carousel>
              <Carousel.Item>
                {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" /> */}
                <Hero img_url="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" img_alt="Bathroom"/>
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80" />
              </Carousel.Item>
              
            </Carousel>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </ProjectSectionContainer>
    </>
  );
};