import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Background from "../../assets/Background.jpeg";
import "./Home.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  gender: Yup.string().required("Gender is required"),
});

const Home = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    age: "",
    gender: "",
    email: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    navigate("/onboarding", { state: { formData: values } });
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          zIndex: -1,
          overflow: "hidden",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="container"
      />
      {/* <div className="container"></div> */}
      <div className="form-container">
        <h2 className="form-title">Movie Recommendation Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-field" style={{ width: "96%" }}>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" placeholder="Enter your name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-field" style={{ width: "96%" }}>
                <label htmlFor="age">Age</label>
                <Field type="number" name="age" placeholder="Enter your age" />
                <ErrorMessage name="age" component="div" className="error" />
              </div>

              <div className="form-field" style={{ width: "96%" }}>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-Binary">Non-Binary</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="error" />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                Get Recommendation
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Home;
