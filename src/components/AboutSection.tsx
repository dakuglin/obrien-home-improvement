import React, { FC } from "react";
import LOGO from "../images/logo2.png";
import { 
  AboutTitle, 
  AboutMain, 
  AboutMainContact 
} from "../styles/AboutSection";


export const AboutSection: FC = () => {

  return (
    <>
    <AboutTitle>Welcome Home</AboutTitle>
    <AboutMain> 
      Let O'Brien Home Improvement help you with your next home renovation. This Colorado based company has been serving the greater Denver Area for over 5 years. 
    </AboutMain>
    <AboutMain>
      Weather your project is big or small, trust O'Brien Home Improvement to transform your space into the home you always dreamed of. Fully licensed and insured, you can rest assured your home will be treated with respect. 
    </AboutMain>
    <AboutMainContact>
      <div>
        <p>
          <a href="tel:3033058433" className="about-section-contact">
          303-305-8433
          </a>
        </p>
        <p>
          <a href="mailto:homeimprovements.obrien@gmail.com" className="about-section-contact">
          homeimprovements.obrien@gmail.com
          </a>
        </p>
      </div>
                     
    </AboutMainContact>
    </>
  );
};