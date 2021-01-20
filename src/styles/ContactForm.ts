import styled from "styled-components";

export const FormContainer = styled.div`
  background: whitesmoke;
  margin: 50px;
  border: 1px solid #204652;
`;

export const FormWrapper = styled.div`
  padding: 48px 50px;
  max-width: 75%;
  margin: 0 auto;

  .form-filed {
    padding: 20px;
    margin: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.2em;
  padding-bottom: 20px;
  text-align: center;

  p.form-title-info {
    display: inline;
    font-size: 20px;
    margin: 5px;
    font-style: italic;
  }
`;

export const Button = styled.button`
  color:  #39b54a;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  font-size: 1em;
  box-shadow: none;
  border: none;
  width: 20%;
  border:  #39b54a 1px solid;
  display: block;
  white-space: none;
`;




