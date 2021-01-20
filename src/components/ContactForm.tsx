import React, { FC, useState } from 'react';
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
    <>
      <FormContainer>
        <FormWrapper>
          <Title>
            Contact Us
            <div>
              <p className="form-title-info">Free Estimates</p>
              <p className="form-title-hammer"><FaHammer /></p>
              <p className="form-title-info">Licensed & Insured</p>
              <p className="form-title-hammer"><FaHammer /></p>
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
            {/* <div className="form-group"> */}
            <Form className="test">
                <div className="form-group">
                  <Field 
                    type="text" 
                    name="name" 
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <Field 
                    type="email" 
                    name="email"
                    className="form-control"
                    placeholder="Email" 
                  />
                </div>
                <br />
                <div className="form-group">
                  <Field 
                    type="phone"
                    name="phone" 
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <br />
                <div className="form-group">
                  <Field 
                    type="text" 
                    name="message" 
                    className="form-control message"
                    placeholder="Message"
                  />
                </div> 
              <br />
              <Button type="submit">Submit</Button>
            </Form>
            {/* </div> */}
          </Formik>
        </FormWrapper>
      </FormContainer>
    </>
  );
};


