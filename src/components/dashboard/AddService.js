import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  CHECK_ACCESS_API,
  CREATE_NEW_SERVICE_API,
} from "../../services/apiUrl";
import LoadingButton from "../uiHelper/LoadingButton";
import LoadingSpinner from "../uiHelper/LoadingSpinner";
import NotFoundDetails from "../uiHelper/NotFoundDetails";

const AddService = () => {
  const [submitting, setSubmitting] = useState(false);
  const [haveAccess, setHaveAccess] = useState(false);
  const [contentLoading, setContentLoading] = useState(true);
  const email = sessionStorage.getItem("email");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.post(CHECK_ACCESS_API, { email: email }).then((res) => {
      setHaveAccess(res.data);
      setContentLoading(false);
    });
  }, [email]);

  const onSubmit = (data, e) => {
    setSubmitting(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    axios
      .post(CREATE_NEW_SERVICE_API, formData)
      .then((res) => {
        setSubmitting(false);
        if (res.data.insertedId) {
          toast.success("Service added successfully");
          e.target.reset();
        }
      })
      .catch((err) => {
        setSubmitting(false);
        // console.log(err);
        toast.error("Oops! please try again");
      });
  };
  return (
    <>
      {contentLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {haveAccess ? (
            <>
              <section className="bg-info py-5">
                <Container>
                  <h2 className="text-primary display-5 fw-bold mb-5">
                    Add Service
                  </h2>
                  <p className="text-secondary">
                    Lorem, ipsum dolor sit consectetur adipisicing elit. Odio
                    beatae, blanditiis <br className="d-none d-md-block" />{" "}
                    optio neque inventore sequi doloremque. Animi.
                  </p>
                </Container>
              </section>
              <section className="py-5">
                <Container>
                  <Row>
                    <Col md={6} className="offset-md-3">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-secondary">
                            Service Image <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            className="border-danger"
                            type="file"
                            name="image"
                            {...register("image", { required: true })}
                          />

                          {errors.image && (
                            <Form.Text className="text-danger">
                              Service image is required!
                            </Form.Text>
                          )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="text-secondary">
                            Service Title <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            className="border-danger"
                            type="text"
                            name="title"
                            {...register("title", { required: true })}
                          />

                          {errors.title && (
                            <Form.Text className="text-danger">
                              Enter service title here!
                            </Form.Text>
                          )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="text-secondary">
                            Service Price <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            className="border-danger"
                            type="text"
                            name="price"
                            {...register("price", {
                              required: true,
                              pattern: /^[1-9][0-9]*$/,
                            })}
                          />

                          {errors.price && (
                            <Form.Text className="text-danger">
                              Price must be a positive integer number! For ex:
                              199
                            </Form.Text>
                          )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="text-secondary">
                            Service Description{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            className="border-danger"
                            as="textarea"
                            rows={7}
                            name="description"
                            {...register("description", { required: true })}
                          />

                          {errors.description && (
                            <Form.Text className="text-danger">
                              Write a service description!
                            </Form.Text>
                          )}
                        </Form.Group>

                        <div>
                          <button className="btn btn-primary" type="submit">
                            {submitting ? <LoadingButton /> : "Add Service"}
                          </button>
                        </div>
                      </form>
                    </Col>
                  </Row>
                </Container>
              </section>
            </>
          ) : (
            <NotFoundDetails data="404 Not Found!" />
          )}
        </>
      )}
    </>
  );
};

export default AddService;
