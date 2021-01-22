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

  div.test.col {
    border-bottom: 1px solid #204652;
  }
`; 

export const Img = styled.img`
//style logo
  width: 220px;
  height: 70px;
  margin-left: 33%;
  
`;

export const FooterTitle = styled.div`
  //styles all second row footer titles
  font-size: 25px;
  font-family: 'Roboto', sans-serif; 
  padding-top: 20px;
  padding-bottom: 20px;
  color:  #39b54a;
  margin-left: 33%;
  font-weight: 800;
`;

export const FooterContent = styled.div`
  font-family: 'Nunito', sans-serif;
  margin-left: 33%;
  font-size: 20px;

  .social-media-icon {
   font-size: 30px;
   margin-left: 10px;
  }
`;

export const FooterCredit = styled.div`
  color: #204652;
  text-align: center;
  font-style: oblique;
  border-top: 3px dashed;
  padding-top: 10px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;

  .credit-link {
    color: #c38d9e;
    font-style: italic;
    text-decoration: none;

  }

  :hover {
    text-decoration: none;
  }
`;
