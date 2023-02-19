import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SIGNUP_API } from "../../services/apiUrl";
import LoadingButton from "../uiHelper/LoadingButton";


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
      delete data.confirm_password;
      axios
        .post(SIGNUP_API, data)
        .then((res) => {
          setSubmitting(false);
          if (res.data.status === 'success') {
            // Signed in
            toast.success("Registration successful");
            //   const user = userCredential.user;
            //   console.log("user created", user.email);
            e.target.reset();
            setTimeout(() => history.push("/login"), 2000);
          } else {
            toast.error(res.data.message);
          }
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
                    Username <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="border-danger"
                    type="text"
                    name="username"
                    {...register("username", { required: true })}
                  />

                  {errors.username && (
                    <Form.Text className="text-danger">
                      Enter your username.
                    </Form.Text>
                  )}
                </Form.Group>

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
