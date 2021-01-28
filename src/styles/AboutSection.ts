import styled from "styled-components";

export const AboutTitle = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  font-size: 3em;
  font-weight: 500;
  font-style: oblique;
  border-bottom: 3px dashed;
`;

export const AboutMain = styled.div`
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  padding-top: 7%;
  text-indent: 40px;
`;

export const AboutMainContact = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  padding-top: 20px;

  a.about-section-contact {
    color:  #39b54a;
    font-style: oblique;  
  }

  a:hover {
    text-decoration: none;
    color:  #204652;
    transition: 0.35s ease-out;
  }
`;
