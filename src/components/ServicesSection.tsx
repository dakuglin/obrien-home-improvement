import React, { FC } from "react";
import { FaHammer } from "react-icons/fa";
import { ServicesContainer, ServicesTitle, Services } from "../styles/ServicesSection";

export const ServicesSection: FC = () => {

  const services: string[] = ["Tile", "Windows",  "Doors", "Fences", " Painting", "Kitchens", "Bathrooms", "Free Estimates", "Upfront Pricing"]

  return (
    <>
    <ServicesContainer>
      <ServicesTitle>What We Offer </ServicesTitle>
      <Services>
        <FaHammer className="form-title-hammer"/>
        {services.map((value: string, index: number) => {
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