import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color:  lightgray;
  position: static;
  width: 100%;
  bottom: 0;
  margin-top: auto;
`;

export const FooterWrapper = styled.div `
  padding: 48px 24px;
  display: flex;
  max-width: 100%;
  margin: 0 auto;

   //styling logo 
   img.company-logo {
    width: 200px;
    height: 70px;
    margin-left: 200px;
  }

  .services{
    margin-top: 105px;
    margin-left: 80px;
  }
`;

export const Contact = styled.div`
  margin-left: 200px;
  padding-top: 30px;

`;