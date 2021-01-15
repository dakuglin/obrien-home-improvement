import styled from "styled-components";

export const Container = styled.nav`

  //overall container styling 
  background-color: rgb(255, 254, 252);
  background-color: lightgray;
  padding: 30px 30px;
  width: 100%;

  //styling of brand tag surrounding logo
  a.navbar-brand {
    padding: 0;
    margin: 0;
  }

  //styling logo 
  img.company-logo {
    width: 300px;
    height: 90px;
  }

  //styles all links in nav 
  .navbar-nav {
    margin: 0 35px;
  }
   
  //styles each individaul nav-link
  a.nav-link {
    margin: 0 16px; 
    font-size: 33px;
    color:green;
  }

  //styles for nav-link
  span {
    color: black;
    font-weight: bold;
    font-family: 'Roboto Condensed', sans-serif;
  }

  //hover effect for nav-links
  span:hover {
    color: #009a49;
    transition: 0.35s ease-out;
  }
`;