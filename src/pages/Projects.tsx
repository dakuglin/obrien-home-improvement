import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectSection } from "../components/ProjectSection"; 

export const Projects: FC = () => {
  return (
    <>
    {/* project page */}
    <Container fluid> {/* fluid container with projects */}
      <Row>
        <Col>
          <ProjectSection />
        </Col>
      </Row>
    </Container>
    </>
  );
};