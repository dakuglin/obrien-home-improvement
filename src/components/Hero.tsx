import React, { FC } from "react";
import { HeroContainer } from "../styles/Hero";

interface Props {
  img_url: string;
  img_alt: string;
}

export const Hero: FC<Props> = ({ img_url, img_alt }) => {
  return (
    <>
    <HeroContainer>
      <img className="responsive-img" src={img_url} alt={img_alt}/>
    </HeroContainer>
    </>
  );
};

