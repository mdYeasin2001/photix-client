import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  CREATE_NEW_SERVICE_API,
} from "../../services/apiUrl";
import LoadingButton from "../uiHelper/LoadingButton";
import NotFoundDetails from "../uiHelper/NotFoundDetails";

const AddService = () => {
  const [submitting, setSubmitting] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (e) => {
    console.log("e", e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "c2772d06761e65ea8652500494ef14a7");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data, e) => {
    setSubmitting(true);
    data.image = imageURL;
    axios
      .post(CREATE_NEW_SERVICE_API, data)
      .then((res) => {
        setSubmitting(false);
        // console.log(res);
        if (res.data.status === 'success') {
          setImageURL(null);
          toast.success("Service added successfully");
          e.target.reset();
        } else {
          toast.error("Something went wrong!")
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
      {user?.role === 'admin' ? (
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
                        onChange={handleImageUpload}
                      />
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
                      <button
                        className="btn btn-primary"
                        disabled={imageURL === null ? true : false}
                        type="submit"
                      >
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
  );
};

export default AddService;
