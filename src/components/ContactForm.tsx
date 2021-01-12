import React, { FC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import { Container, MyForm } from "../styles/Form";


export const ContactForm: FC = () => {

  const [status, setStatus] = useState('');
  
  return (
    <>
    <Container>
    <Formik 
      initialValues={{
      name: '',
      email: '',
      phone: '',
      message: '',
      }}
      onSubmit={data => {
        console.log(data)
      }}
    >
      {({values, handleChange, handleSubmit}) => (
        <MyForm onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control 
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter email" 
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control 
              type="phone" 
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Password" 
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Message:</Form.Label>
            <Form.Control 
              type="message" 
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Please provide a description of work" 
            />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          {status === "SUCCESS" ? <p>Thank you!</p> : <Button type="submit" className="btn btn-primary form">Send</Button>}
          {status === "ERROR" && <p>There was an error, please submit the form again.</p>}
        </MyForm>
      )}
    </Formik>
    </Container>
    </>
  )
};


