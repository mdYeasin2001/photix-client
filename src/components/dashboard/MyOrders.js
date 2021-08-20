import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ORDER_LIST_BY_EACH_USER_API } from "../../services/apiUrl";
import LoadingSpinner from "../uiHelper/LoadingSpinner";
import NotFoundDetails from "../uiHelper/NotFoundDetails";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const email = sessionStorage.getItem("email");
  const [contentLoading, setContentLoading] = useState(true);
  useEffect(() => {
    axios.post(ORDER_LIST_BY_EACH_USER_API, { email: email }).then((res) => {
      setOrders(res.data);
      setContentLoading(false);
    });
  }, [email]);
  return (
    <section className="py-5">
      {!contentLoading ? (
        <Container className="my__orders__container d-flex align-items-center">
          {orders.length > 0 ? (
            <table className="table">
              <thead>
                <tr className="bg-info">
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="bg-info">
                    <th scope="row">{order.name}</th>
                    <td>{order.order_email}</td>
                    <td>{order.service.title}</td>
                    <td>{order.service.price}</td>
                    <td>
                      <span
                        className={`badge rounded-pill ${
                          order.status === "pending"
                            ? "bg-warning"
                            : order.status === "inprogress"
                            ? "bg-primary"
                            : order.status === "done"
                            ? "bg-success"
                            : ""
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NotFoundDetails data="No order Found!" />
          )}
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default MyOrders;
