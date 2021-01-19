import React, { FC, useState } from "react";
// import projects from "../projects.json";
import { Carousel } from "react-bootstrap";
import projects  from "../projects.json";


interface Props {
  id: number;
  img_url: string;
  img_alt: string;
  // title: string;
  // description: string;
}


export const MyCarousel: FC = () => {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex: number) =>  {
  //   setIndex(selectedIndex);
  // };

  return (
    <>
    {/* {projects.length ? (
      <Carousel >
      {projects.map(project => (
        <Carousel.Item>
          <img 
            id={project.id}
            src={project.img_url}
            alt={project.img_alt}
          />
        </Carousel.Item> 
     
      ))}
      </Carousel> 
    ) : (
      <h3>loading...</h3>
    )} */}
    </>
  );
};