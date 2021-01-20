import React, { FC, useState } from 'react';
// import { Button } from "react-bootstrap";
import { Title, FormContainer, FormWrapper, Button } from "../styles/ContactForm";
import { FORM_URL } from "../config";
import {
  Formik,
  Form,
  Field,
} from 'formik';
import axios from 'axios';
import { FaHammer } from "react-icons/fa"

 
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
      
      <FormContainer>
        <FormWrapper>
        <Title>Contact Us
        <div className="form-title-info">
          <p className="form-title-info">Free Estimates <FaHammer /> </p>
          <p className="form-title-info">Licensed & Insured <FaHammer /> </p>
          <p className="form-title-info">Upfront Pricing</p> 
        </div>
        </Title>
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
                {/* <label htmlFor="name">Name:</label> */}
                <Field 
                  type="text" 
                  name="name" 
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div>
                {/* <label htmlFor="email">Email:</label> */}
                <Field 
                  type="email" 
                  name="email"
                  className="form-control"
                  placeholder="Email" 
                />
              </div>
              <div>
                {/* <label htmlFor="phone">Phone Number:</label> */}
                <Field 
                  type="phone"
                  name="phone" 
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div>
                {/* <label htmlFor="message">Message:</label> */}
                <Field 
                  type="text" 
                  name="message" 
                  className="form-control"
                  placeholder="Message"
                />
              </div> 
            <br></br>
            <Button type="submit">Submit</Button>
          </Form>
          </div>
        </Formik>
        </FormWrapper>
      </FormContainer>
    </div>
  );
};


