import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import firebaseConfig from "../../firebase.config";
import LoadingButton from "../uiHelper/LoadingButton";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const SignUp = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    if (data.password === data.confirm_password) {
      setSubmitting(true);
      setError(null);
      //   console.log(data);
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          toast.success("Registration successful");
          setSubmitting(false);
          //   const user = userCredential.user;
          //   console.log("user created", user.email);
          e.target.reset();
          setTimeout(() => history.push("/login"), 2000);
          // ...
        })
        .catch((error) => {
          //   const errorCode = error.code;
          setSubmitting(false);
          const errorMessage = error.message;
          //   console.log("error", errorMessage);
          toast.error(errorMessage);
          // ..
        });
    } else if (data.confirm_password !== data.password) {
      setError("Password Not match!");
    }
  };
  return (
    <div className="auth__container">
      <section className="bg-info py-5">
        <Container>
          <h2 className="text-primary display-5 fw-bold">My Account</h2>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6} className="offset-md-3">
              <h1 className="text-primary mb-3">Register</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Email address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="border-danger"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                  />

                  {errors.email && (
                    <Form.Text className="text-danger">
                      Enter your email address.
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Password <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      className="border-danger"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                    />
                    {showPassword ? (
                      <IoEyeOutline
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="position-absolute d-block pass-icon"
                      />
                    ) : (
                      <IoEyeOffOutline
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="position-absolute d-block pass-icon"
                      />
                    )}
                  </div>
                  {errors.password && (
                    <Form.Text className="text-danger">
                      Enter your password.
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Confirm Password <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      className="border-danger"
                      name="confirm_password"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirm_password", { required: true })}
                    />
                    {showConfirmPassword ? (
                      <IoEyeOutline
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="position-absolute d-block pass-icon"
                      />
                    ) : (
                      <IoEyeOffOutline
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="position-absolute d-block pass-icon"
                      />
                    )}
                  </div>
                  {errors.confirm_password && (
                    <Form.Text className="text-danger">
                      Enter your confirm password.
                    </Form.Text>
                  )}
                  {error && (
                    <Form.Text className="text-danger">{error}</Form.Text>
                  )}
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" type="submit">
                    {submitting ? <LoadingButton /> : "Register"}
                  </button>
                  <p className="text-secondary">
                    Already have an account?
                    <Link to="/login" className="text-danger">
                      Login Here
                    </Link>
                  </p>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SignUp;