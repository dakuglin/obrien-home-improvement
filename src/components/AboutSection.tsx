import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
// import { FaHammer } from "react-icons/fa"
import { AboutTitle, AboutMain, AboutMainContact } from "../styles/AboutSection";


export const AboutSection: FC = () => {

  return (
    <>
    <AboutTitle>Welcome Home</AboutTitle>
    <AboutMain> 
      Let O'Brien Home Improvement help you with your next home renovation. This Colorado based company has been serving the greater Denver Area for over 5 years. 
    </AboutMain>
    <AboutMain>
      Weather your project is big or small, trust O'Brien Home Improvement to transform your space into a home you always dreamed of. Fully licensed and insured. Rest assured we will treat your home with respect.
    </AboutMain>
    <AboutMainContact>
      303-305-8433
      <br />
      homeimprovements.obrien@gmail.com
    </AboutMainContact>
 
    </>
  );
};