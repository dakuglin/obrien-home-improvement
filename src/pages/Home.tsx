import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Hero } from "../components/Hero";
import { Title } from "../styles/Home";


export const Home: FC = () => {

  const url = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

  return (
    <>
    <Container fluid>
      <Row>
        <Col sm={8}>
          <Hero 
            img_url={ url } 
            img_alt='bathroom'
          />
        </Col>
        <Col>
          <Title>
            <p className="main-title">Welcome</p>
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
