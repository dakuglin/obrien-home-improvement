import styled from "styled-components";
// import { Props } from "../components/ContactForm";

export const Container = styled.div`
  background: whitesmoke;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  /* border-radius: 50px; */

  .form-control {
    width: 80%;
    /* padding propser were here  */
  }
  div.form-field {
    display: block;
    text-align: left;
  }

  form.test {
    /* display: inline-block; */
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.2em;
`;

export const Button = styled.button`
  color: green;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  font-size:1em;
  box-shadow: none;
  border: none;
  width: 10%;
  border: green 1px solid;
  display: block;
  white-space: none;
`;




