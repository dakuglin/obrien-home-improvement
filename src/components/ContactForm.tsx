import React, { FC, useState } from 'react';
// import { Button } from "react-bootstrap";
import { Title, Container, Button } from "../styles/Form";

import {
  Formik,
  Form,
  Field,
} from 'formik';
import axios from 'axios';
import { FORM_URL } from "../config";
 
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  ok: boolean
  message: string;
}

// export interface Props {
//   padding: string;
// }
 
export const ContactForm: FC<{}> = () => {

  const [status, setStatus] = useState<Errors>();

  const handleStatusResponse = ( ok: boolean, message: string) => {
    setStatus({ ok, message });
  };

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  return (
    <div>
      <Title>Contact Us</Title>
      {/* Formik */}
      <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          axios({
            method: "POST",
            url: FORM_URL,
            data: values,
          })
         .then(response => {
          console.log(response)
          actions.setSubmitting(false);
          actions.resetForm();
          handleStatusResponse(true, "Thank you!");
         })
         .catch(error => {
           console.log(error)
           actions.setSubmitting(false);
           handleStatusResponse(false, error.response.data.error)
         })
        }}
      >
        <div className="form-field">
        <Form className="test">
            <div>
              <label htmlFor="name">Name:</label>
              <Field 
                type="text" 
                name="name" 
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field 
                type="email" 
                name="email"
                className="form-control" 
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <Field 
                type="phone"
                name="phone" 
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <Field 
                type="text" 
                name="message" 
                className="form-control"
              />
            </div> 
         
          <br></br>
          <Button type="submit">Submit</Button>
        </Form>
        </div>
      </Formik>
      </Container>
    </div>
  );
};


