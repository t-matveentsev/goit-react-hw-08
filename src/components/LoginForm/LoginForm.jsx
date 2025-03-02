import s from "./LoginForm.module.css";

import { Field, Formik, Form, ErrorMessage } from "formik";

const LoginForm = () => {
  const initialValues = {
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
