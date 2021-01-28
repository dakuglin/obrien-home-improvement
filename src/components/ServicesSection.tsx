import React, { FC } from "react";
import { FaHammer } from "react-icons/fa"; //react-icons
import { 
  ServicesContainer, 
  ServicesTitle, 
  Services } from "../styles/ServicesSection"; //styled components

export const ServicesSection: FC = () => {

  const services: string[] = ["Tile", "Windows",  "Doors", "Fences", " Painting", "Kitchens", "Bathrooms", "Free Estimates", "Upfront Pricing"]; //all services offered array of strings

  return (
    <>
    <ServicesContainer> 
      <ServicesTitle>What We Offer</ServicesTitle>
      <Services>
        <FaHammer className="form-title-hammer"/>
        {services.map((value: string, index: number) => { //mapping over array of services 
          return (
            <>
            <li key={index} className="form-title-info">{value}</li>
            <FaHammer className="form-title-hammer"/>
            </>
          )
        })}
      </Services>
    </ServicesContainer>
    <p></p>
    </>
  );
};