import React, { FC } from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { 
  ProjectSectionContainer, 
  Title, 
} from "../styles/ProjectSection"; //styled components 
import projects from "../projects.json"; //json file with project pictures and descriptions to map over

export const ProjectSection: FC = () => {

  return (
    <>
    <Title>Projects</Title>
    <ProjectSectionContainer>
      <Container>
        <Row>
          <Col>
            <Carousel interval={null}>
               {/* mapping over project 1 photos*/}
            {projects.map(project => (  
              <Carousel.Item>
                <Card>
                  <Card.Img 
                    className="d-block w-100"
                    src={project.img_url} 
                    alt={project.img_alt}
                  />
                  <Card.Body>
                    <Card.Title>Project 1 Picures</Card.Title>
                    <Card.Text>
                      Exapmle text here
                    </Card.Text>
                </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
           </Carousel> 
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel interval={null}>
               {/* mapping over project 1 photos*/}
            {projects.map(project => (
              <Carousel.Item>
                <Card>
                  <Card.Img 
                    className="d-block w-100"
                    src={project.img_url} 
                    alt={project.img_alt}
                  />
                </Card>
                <Card.Body>
                    <Card.Title>Project 2 Pictures</Card.Title>
                    <Card.Text>
                      Exapmle text here
                    </Card.Text>
                </Card.Body>
              </Carousel.Item>
            ))}
           </Carousel> 
          </Col>
        </Row>
      </Container>
    </ProjectSectionContainer>

    {/* <ProjectSectionContainer>
    <Container fluid>
      <Row className="row">
        <Col xl={6}>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            <Card.Body>
              <Card.Title>Bathrooms</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80" />
            <Card.Body>
              <Card.Title>Kitchens</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row"> 
        <Col xl={6}>
          <Card>
            <Card.Img variant="top" src= "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            <Card.Body>
              <Card.Title>Laundry Rooms</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            <Card.Body>
              <Card.Title>Bathrooms</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </ProjectSectionContainer> */}
    </>
  );
};