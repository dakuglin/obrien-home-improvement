import React, { FC } from 'react';
import { 
  Formik, 
  Field, 
  Form, 
} from "formik";


interface Values {
  name: string;
  email: string;
  phone: string;
  message: string;
}


export const ContactForm: FC = () => {

  const initialValues: Values = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={ initialValues } 
        onSubmit={data => {
        console.log('Data on submit: ', data);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field 
            id="name" 
            name="name" 
            placeholder="Name" 
            type='text'
            value={values.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <Field 
            id="email" 
            name="email" 
            placeholder="Email" 
            value={values.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Email</label>
          <Field 
            id="phone" 
            name="phone" 
            placeholder="Phone" 
            value={values.phone}
            onChange={handleChange}
          />
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  );
};