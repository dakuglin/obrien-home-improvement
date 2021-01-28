import styled from "styled-components";

export const FormContainer = styled.div`
  background: whitesmoke;
  margin: 60px;
  background-color: #204652;
`;

export const FormWrapper = styled.div`
  padding: 40px 10px;
  max-width: 65%;
  margin: 0 auto;

  input.form-control {
    height: 40px;
    font-style: italic;
  }

  input.form-control.message {
    height: 100px;
    vertical-align: text-top;
    padding-bottom: 65px;
  }

  .status {
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.2em;
  padding-bottom: 30px;
  text-align: center;
  color: #ffffff;

  .form-title-info {
    display: inline;
    font-size: 20px;
    margin: 12px;
    font-style: oblique;
    color: #39b54a;
  }
  .form-title-hammer {
    display: inline;
    font-size: 17px;
    color: #39b54a;
  }
`;

export const Button = styled.button`
  background-color:  #39b54a;
  font-family: 'Nunito', sans-serif;
  color:  #ffffff;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  font-size: 1em;
  box-shadow: none;
  border: none;
  width: 20%;
  border:  #ffffff 1px solid;
  white-space: none;
  display: block;
  margin: 0 auto;

  :hover {
    background-color: #39b54a;
    transition: 0.35s ease-out;
  }
`;




