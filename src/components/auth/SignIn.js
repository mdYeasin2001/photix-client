import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { LOGIN_API } from "../../services/apiUrl";
import LoadingButton from "../uiHelper/LoadingButton";


const SignIn = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmitting(true);
    axios
      .post(LOGIN_API, data)
      .then((res) => {
        setSubmitting(false);
        if (res.data.status === 'success') {
          sessionStorage.setItem("user", JSON.stringify(res.data.data.user));
          toast.success("login successful");
          setTimeout(() => history.replace(from), 2000);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        // var errorCode = error.code;
        setSubmitting(false);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
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
              <h1 className="text-primary mb-3">Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" type="submit">
                    {submitting ? <LoadingButton /> : "login"}
                  </button>
                  <p className="text-secondary">
                    Don't have an account?
                    <Link to="/register" className="text-danger">
                      Register Here
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

export default SignIn;
