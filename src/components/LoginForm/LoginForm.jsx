import { useDispatch } from "react-redux";
import s from "./LoginForm.module.css";

import { Field, Formik, Form, ErrorMessage } from "formik";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import { usersLogin } from "../../helpers/schema";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate("/contacts", { replace: true });
        options.resetForm();
      })
      .catch(() =>
        options.setFieldError("password", "invalid email or password")
      )
      .finally(() => options.setSubmitting(false));
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={usersLogin}
      >
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
          <button type="submit">Log In</button>
          <div className={s.redirectInfo}>
            <p>You do not have account yet?</p>
            <Link className={s.redirectLink} to="/register">
              Get it!
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
