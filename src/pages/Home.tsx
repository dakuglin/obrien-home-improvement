import React, { FC } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Title } from "../styles/Home";
import { MainCarousel } from "../components/MainCarousel";


export const Home: FC = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col sm={8}>
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
