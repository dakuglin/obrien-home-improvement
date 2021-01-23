import styled from "styled-components";

export const FooterContainer = styled.footer`
  //container 
  background-color: #c2cfcf;
  position: static;
  width: 100%;
  bottom: 0;
  margin-top: auto;
`;

export const FooterWrapper = styled.div`
  //wrapper
  padding: 48px 50px;
  display: flex;
  max-width: 100%;
  margin: 0 auto;
`; 

export const Img = styled.img`
  //style logo
  width: 220px;
  height: 70px;
  margin-left: 26%;
`;

export const FooterTitle = styled.div`
  //styles all second row footer titles
  font-family: 'Roboto', sans-serif; 
  font-size: 27px;
  padding-top: 20px;
  padding-bottom: 20px;
  color:  #39b54a;
  font-weight: 1000;
`;

export const FooterContent = styled.div`
  font-family: 'Nunito', sans-serif;
  margin-left: 33%;
  font-size: 20px;
  font-weight: 500;

  svg.social-media-icon {
    font-size: 40px;
    margin: 5px;
    color: #204652;
  }

  svg.social-media-icon:hover {
    color:  #39b54a;
    transition: 0.35s ease-out;
  }
`;

export const FooterCredit = styled.div`
  color: #204652;
  text-align: center;
  font-style: oblique;
  border-top: 3px dashed;
  padding-top: 15px;
  font-size: 17px;
  font-weight: 600;

  span.credit-link {
    color: #c38d9e;
    font-style: italic;
    text-decoration: none;
  }

  span.credit-link:hover {
    text-decoration: none;
  }
`;
