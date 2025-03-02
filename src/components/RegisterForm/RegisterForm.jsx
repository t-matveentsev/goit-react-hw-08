import { useDispatch } from "react-redux";
import s from "./RegisterForm.module.css";

import { Field, Formik, Form, ErrorMessage } from "formik";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
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
          <p className={s.redirectText}>
            You already have account?
            <Link to="/login"> Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
