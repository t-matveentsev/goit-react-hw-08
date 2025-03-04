import { useDispatch } from "react-redux";
import s from "./LoginForm.module.css";

import { Field, Formik, Form, ErrorMessage } from "formik";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      .then((res) => {
        toast.success(`Welcome ${res.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid email or password"));
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
          <button type="submit">Log In</button>
          <p className={s.redirectText}>
            You do not have account yet <Link to="/register">Get it!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
