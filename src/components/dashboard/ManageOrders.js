import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  CHECK_ACCESS_API,
  ORDER_LIST_API,
  UPDATE_ORDER_STATUS_API,
} from "../../services/apiUrl";
import LoadingSpinner from "../uiHelper/LoadingSpinner";
import NotFoundDetails from "../uiHelper/NotFoundDetails";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const email = sessionStorage.getItem("email");
  const [contentLoading, setContentLoading] = useState(true);
  const [loadAgain, setLoadAgain] = useState(null);
  const [haveAccess, setHaveAccess] = useState(false);
  useEffect(() => {
    axios.post(CHECK_ACCESS_API, { email: email }).then((res) => {
      setHaveAccess(res.data);
    });
    axios.post(ORDER_LIST_API, { email: email }).then((res) => {
      setOrders(res.data);
      setContentLoading(false);
    });
  }, [email, loadAgain]);

  const updateStatus = (id, status) => {
    axios
      .patch(UPDATE_ORDER_STATUS_API, { id, status })
      .then((res) => {
        // console.log("res", res);
        setLoadAgain(new Date().getTime());
        toast.success("Order status updated successfully");
      })
      .catch((err) => {
        toast.error("Oops! Please try again later");
      });
  };
  return (
    <section className="py-5">
      {!contentLoading ? (
        <>
          {haveAccess ? (
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
                      <th scope="col">Action</th>
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
                        <td>
                          {order.status === "pending" && (
                            <button
                              onClick={() =>
                                updateStatus(order._id, "inprogress")
                              }
                              className="btn btn-primary me-2"
                            >
                              inprogress
                            </button>
                          )}
                          {order.status === "pending" ||
                          order.status === "inprogress" ? (
                            <button
                              onClick={() => updateStatus(order._id, "done")}
                              className="btn btn-success me-2"
                            >
                              done
                            </button>
                          ) : (
                            ""
                          )}
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
            <NotFoundDetails data="404 Not Found!" />
          )}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default ManageOrders;
