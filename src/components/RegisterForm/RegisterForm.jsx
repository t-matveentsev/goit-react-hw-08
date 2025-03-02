import s from "./RegisterForm.module.css";

import { Field, Formik, Form, ErrorMessage } from "formik";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span>Name:</span>
            <Field name="name"></Field>
            <ErrorMessage
              name="name"
              component="p"
              className={s.errorMessage}
            />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email"></Field>
            <ErrorMessage
              name="email"
              component="p"
              className={s.errorMessage}
            />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
            <ErrorMessage
              name="password"
              component="p"
              className={s.errorMessage}
            />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
