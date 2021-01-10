import React, { FC, useState } from "react";
import { Formik } from "formik";

export const Form: FC = () => {

  const [status, setStatus] = useState('');

  return (
    <>
    <form
      // onSubmit={((event: React.FormEvent<HTMLFormElement>) => setStatus(event)}
    >
    </form>
    </>
  );
};