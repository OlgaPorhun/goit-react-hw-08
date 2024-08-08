import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      resetForm();
    } catch (error) {
      if (error.code === 11000) {
        setErrorMessage("Email already exists. Please use a different email.");
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" className={styles.error} />

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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
