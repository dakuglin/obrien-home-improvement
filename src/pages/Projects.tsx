import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectSection } from "../components/ProjectSection";

export const Projects: FC = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col>
          <ProjectSection />
        </Col>
      </Row>
    </Container>
    </>
  );
};