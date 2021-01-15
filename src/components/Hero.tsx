import React, { FC } from "react";


interface Props {
  img_url: string;
  img_alt: string;
}

export const Hero: FC<Props> = ({ img_url, img_alt }) => {
  return (
    <>
    <div className="hero-container ">
      <img className="hero-img img-fluid" src={img_url} alt={img_alt}/>
    </div>
    </>
  );
};

