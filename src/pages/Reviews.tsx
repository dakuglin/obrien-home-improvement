import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewSection } from "../components/ReviewSection";

export const Reviews: FC = () => {
  return (
    <>
    {/* project page */}
    <Container fluid> {/* fluid container with projects */}
      <Row>
        <Col>
          <ReviewSection />
        </Col>
      </Row>
    </Container>
    </>
  );
};
