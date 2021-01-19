import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "../styles/Home";
import { MainCarousel } from "../components/MainCarousel";
// import projects from "../projects.json";
// import { MyCarousel } from "../components/MainCarousle2";

// interface Props {
//   id: number;
//   img_alt: string;
//   title: string;
//   description: string;
// }

export const Home: FC = () => {

  return (
    <>
    <Container fluid>
      <Row>
        <Col sm={8}>
          {/* {projects.map(project => (
            <MyCarousel
              id={project.id}
              img_url={project.img_url}
              img_alt={project.img_alt}
              title={project.title}
              description={project.description}
            />
          ))} */}
          <MainCarousel />
        </Col>
        <Col>
          <Title>
            <p className="main-title">Welcome Home</p>
            <br />
            <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Fermentum odio eu feugiat pretium. A scelerisque purus semper eget. Purus sit amet luctus venenatis lectus magna fringilla. Ut venenatis tellus in metus vulputate eu scelerisque. Turpis massa tincidunt dui ut ornare. Sit amet purus gravida quis blandit turpis cursus in. Molestie at elementum eu facilisis sed odio morbi. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Eget est lorem ipsum dolor sit. Nulla facilisi morbi tempus iaculis. Eu consequat ac felis donec.</p>
            <br />
            <p className="main-services">Services </p>
              <ul className="main-services-list">
                <li>Tile</li>
                <li>Fences</li>
                <li>Painting</li>
                <li>Windows & Doors</li>
                <li>Bathrooms</li>
                <li>Kitchens</li>
              </ul>
          </Title>
        
        
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
 
    </>
  );
};
