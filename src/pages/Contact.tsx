import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";

export const Contact: FC = () => {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    </>
  );
};