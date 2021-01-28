import React, { FC, useState } from 'react';
import { 
  Title, 
  FormContainer, 
  FormWrapper, 
  Button } from "../styles/ContactForm"; //styled components 
import { FORM_URL } from "../config/config"; // protecting form url
import {
  Formik,
  Form,
  Field,
} from 'formik'; //formik helps simplify state and handeling onSumbmit
import axios from 'axios';
import { FaHammer } from "react-icons/fa"


// typescript interface with the types needed for initial form values
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// typescript interface with the types needed for handeling error and message
interface Errors {
  ok: boolean
  message: string;
}

export const ContactForm: FC<{}> = () => { //react function component

  const [status, setStatus] = useState<Errors>(); // the state for response from server (status is either true or false if the request went through or not) 

  const handleStatusResponse = ( ok: boolean, message: string) => { //tracks and displays response from server
    setStatus({ ok, message });
  };

  const initialValues: FormValues = { //initialValues of type FormValues
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
          initialValues={initialValues} //formik requires initialValues
          onSubmit={(values, actions) => { //onSubmit function within formik and provides resetForm and setSubmitting
            console.log({ values, actions });
            axios({ //asynchronous HTTP request
              method: "POST", 
              url: FORM_URL, 
              data: values,
            })
          .then(response => { //response object from axios request 
            console.log(response)
            actions.setSubmitting(false); //bad request
            actions.resetForm(); //reset form once response object is recieved
            handleStatusResponse(true, "Thank you!"); //good request
          })
          .catch(error => {
            console.log(error)
            actions.setSubmitting(false); //bad request
            handleStatusResponse(false, error.response.data.error) //error that occured on submit
          })
          }}
        >
          {({ isSubmitting }) => ( //isSubmitting is state in formik
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
              {/* ternary operator for user to see if form submits properly */}
              {status?.ok === true ? <p className="status">Thank you!</p> : <Button type="submit" className="btn btn-primary form" disabled={isSubmitting}>Send</Button>}
              {status?.ok === false && <p className="status">Please try submitting the form again.</p>}
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FormContainer>
    </>
  );
};






