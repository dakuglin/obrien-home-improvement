// import React, { FC, useState } from "react";
// import axios from "axios";
// import { Formik, Field, ErrorMessage } from "formik";



// interface FormValues {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// export const ContactForm: FC<{}> = () => {

//   const [status, setStatus] = useState('');

//   //  onSubmit{ (values, actions) => {
//   //   axios({
//   //     method: "POST",
//   //     url: process.env.FORM_URL,
//   //     data: values,
//   //   })
//     // .then(response => {
//     //   actions.setSubmitting(false);
//     //   actions.resetForm();
//     //   // handleStatusResponseResponse(true, "Thank you!")
//     // })
//   // }
//   const initialValues: FormValues = {
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   };

//   return (
//     <>
//     <Container>
// 

//         <MyForm onSubmit={handleSubmit} className="mx-auto">
//           <Form.Group controlId="formName">
//             <label>Name:</label>
//             <Form.Control 
//               type="text"
//               name="name"
//               value={values.name}
//               onChange={handleChange}
//               placeholder="Name"
//             />
//           </Form.Group>
//           <Form.Group controlId="formEmail">
//             <label>Email Address:</label>
//             <Form.Control 
//               type="email" 
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               placeholder="Enter email" 
//             />
//           </Form.Group>
//           <Form.Group controlId="formPhone">
//             <label>Phone Number:</label>
//             <Form.Control 
//               type="phone" 
//               name="phone"
//               value={values.phone}
//               onChange={handleChange}
//               placeholder="Password" 
//             />
//           </Form.Group>
//           <Form.Group controlId="formPhone">
//             <label>Message:</label>
//             <Form.Control 
//               type="message" 
//               name="message"
//               value={values.message}
//               onChange={handleChange}
//               placeholder="Please provide a description of work" 
//             />
//           </Form.Group>
//           {/* <Button variant="primary" type="submit">
//             Submit
//           </Button> */}
//           {status === "SUCCESS" ? <p>Thank you!</p> : <Button type="submit" className="btn btn-primary form">Send</Button>}
//           {status === "ERROR" && <p>There was an error, please submit the form again.</p>}
//         </MyForm>

//     </Container>
//     </>
//   )
// };


import React, { FC, useState } from 'react';
import { Button } from "react-bootstrap";
// import label from 'react-bootstrap/label';
// import FormGroup from 'react-bootstrap/FormGroup';
// import { Container, FormWrapper } from "../styles/Form";

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
      <h1>Contact Us</h1>
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
        <Form>
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
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};


