import React, { FC } from "react";
import { HeroContainer } from "../styles/Hero";
// import { Container } from "react-bootstrap";


export const HeroTest: FC = () => {
  return (
     <>
     {/* <HeroContainer>
     <Container fluid className="hero-image">
       
     </Container>

     </HeroContainer> */}

    
    {/* <Container fluid className="container"> */}
      {/* <div> */}
      <HeroContainer>
      <img 
      className="img-fluid"
      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="..."
      />
      </HeroContainer>
      {/* </div> */}
    {/* </Container> */}

 
    </>
  );
};