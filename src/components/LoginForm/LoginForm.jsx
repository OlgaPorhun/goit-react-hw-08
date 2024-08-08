import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      resetForm();
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" className={styles.error} />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage
          name="password"
          component="div"
          className={styles.error}
        />

        {errorMessage && <div className={styles.error}>{errorMessage}</div>}

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
