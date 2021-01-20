import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { About } from "../styles/Home";
import { MainCarousel } from "../components/MainCarousel";
import { FaHammer } from "react-icons/fa"
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
          <About>
            <p className="main-title">Welcome Home</p>
            <br />
            <p className="main-text"> 
              Let O'Brien Home Improvement help you with your next home renovation. This Colorado based company has been serving the greater Denver Area for over 5 years. Weather your project is big or small, trust O'Brien Home Improvement to transform your space into a home you always dreamed of.
            </p>
            <p className="main-text"> Fully licensed and insured. Rest assured we will treat your home with respect. Call today for a free estimate.</p>
            <br />
            <p className="main-services">Services</p>
            <Row className="main-services-rows">
              <Col sm={2}/>
              <Col sm={3}>
                <div className="main-services-list">
                  <li> <FaHammer className="main-services-bullet"/>Tile</li>
                  <li> <FaHammer className="main-services-bullet"/>Fences</li>
                  <li> <FaHammer className="main-services-bullet"/>Painting</li>
                </div>
              </Col>
              <Col>
                <div className="main-services-list">
                  <li> <FaHammer className="main-services-bullet"/>Kitchens</li>
                  <li> <FaHammer className="main-services-bullet"/>Bathrooms</li>
                  <li> <FaHammer className="main-services-bullet"/>Windows & Doors</li>
                </div>
              </Col>
            </Row>
          </About>
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
