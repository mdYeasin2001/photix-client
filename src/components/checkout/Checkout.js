import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MAKE_ORDER_API, SERVICES_LIST_API } from "../../services/apiUrl";
import LoadingButton from "../uiHelper/LoadingButton";

const Checkout = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    axios.get(`${SERVICES_LIST_API}/${id}`).then((res) => setService(res.data));
  }, [id]);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    data.service = service[0];
    data.status = "pending";
    data.logged_user_email = email;
    setSubmitting(true);

    if (service.length > 0) {
      //   console.log("data", data);
      axios
        .post(MAKE_ORDER_API, data)
        .then((res) => {
          setSubmitting(false);
          //   console.log(res);
          if (res.data.insertedId) {
            toast.success("Order taken successfully");
            e.target.reset();
          }
        })
        .catch((err) => {
          setSubmitting(false);
          //   console.log(err);
          toast.error("Oops! please try again");
        });
    } else {
      toast.error("No service selected!");
    }
  };
  return (
    <>
      <section className="bg-info py-5">
        <Container>
          <h2 className="text-primary display-5 fw-bold mb-5">Checkout</h2>
          {service.length > 0 && (
            <Card className="border-0 p-4 shadow">
              <Row className="d-flex justify-content-center align-items-start">
                <Col md={3}>
                  <img
                    className="img-fluid"
                    src={`data:${service[0].image.contentType};base64,${service[0].image.img}`}
                    alt={service[0].title}
                  />
                </Col>
                <Col md={9}>
                  <h5 className="text-primary fw-normal">{service[0].title}</h5>
                  <h6 className="text-primary display-6">
                    $ {service[0].price}
                  </h6>
                  <span className="text-secondary border-bottom border-danger border-5 mb-3 d-inline-block">
                    Description:
                  </span>
                  <p className="text-secondary lead">
                    {service[0].description.slice(0, 70) + "..."}
                  </p>
                </Col>
              </Row>
            </Card>
          )}
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6} className="offset-md-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="border-danger"
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                  />

                  {errors.name && (
                    <Form.Text className="text-danger">
                      Enter your name!
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="border-danger"
                    type="email"
                    name="order_email"
                    {...register("order_email", { required: true })}
                  />

                  {errors.order_email && (
                    <Form.Text className="text-danger">
                      Enter your email!
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="border-danger"
                    type="text"
                    name="address"
                    {...register("address", { required: true })}
                  />

                  {errors.address && (
                    <Form.Text className="text-danger">
                      Enter your address!
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">
                    Phone <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="border-danger"
                    type="tel"
                    name="phone"
                    {...register("phone", { required: true })}
                  />

                  {errors.phone && (
                    <Form.Text className="text-danger">
                      Enter your phone number!
                    </Form.Text>
                  )}
                </Form.Group>

                <div>
                  <button className="btn btn-primary" type="submit">
                    {submitting ? <LoadingButton /> : "checkout"}
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Checkout;
