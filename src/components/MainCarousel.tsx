import React, { FC } from "react";
import { Hero } from "./Hero";
import { Carousel } from "react-bootstrap";


export const MainCarousel: FC = () => {

  const url_1 = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

  const url_2 = "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80";

  const url_3 = "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

  return (
    <>
    <Carousel>
      <Carousel.Item >
        {/* <Hero 
          img_url={ url_1 } 
          img_alt='bathroom'
        /> */}
        <img
          className="d-block w-100"
          src={url_1}
          alt="Bathroom"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        {/* <Hero
          img_url={ url_2 } 
          img_alt='kitchen'
        /> */}
         <img
          className="d-block w-100"
          src={url_2}
          alt="Kitchen"
        />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Hero
          img_url={ url_3 } 
          img_alt='laurdry room'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};