import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #c2cfcf;
  position: static;
  width: 100%;
  bottom: 0;
  margin-top: auto;

   //styling logo 
   img.company-logo {
    width: 220px;
    height: 70px;
  }

  .footer-row {
    padding-top: 20px;
    padding-left: 80px;
    color: #204652;
  } 

  .social-media-icon {
    font-size: 30px;
    margin: 15px;
    
  }
`;

export const FooterWrapper = styled.div`
  padding: 40px 200px;
  display: flex;
  max-width: 100%;
  margin: 0 auto;
`; 

export const Title = styled.div`
  font-size: 33px;
  font-family: 'Roboto', sans-serif; 
`;

export const FooterLink = styled.a`
  color: #204652;

  :hover {
    color: black;
    transition: 0.35s ease-out;
    text-decoration: none;
  }
`;
