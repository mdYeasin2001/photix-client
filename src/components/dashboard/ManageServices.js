import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  MANAGE_SERVICES_LIST_API,
} from "../../services/apiUrl";
import DeleteConfirmationModal from "../Modal/DeleteConfirmationModal";
import NotFoundDetails from "../uiHelper/NotFoundDetails";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [reload, setReload] = useState(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    axios.post(MANAGE_SERVICES_LIST_API, { email: user?.email }).then((res) => {
      setServices(res.data.data.services);
    });
  }, [user, reload]);
  return (
    <section className="py-5">
      <DeleteConfirmationModal
        selectedServiceId={selectedServiceId}
        setSelectedServiceId={setSelectedServiceId}
        show={showDeleteConfirmationModal}
        setReload={setReload}
        setShowDeleteConfirmationModal={setShowDeleteConfirmationModal}
      />

      <>
        {user.role === 'admin' ? (
          <Container className="my__orders__container d-flex align-items-center">
            {services.length > 0 ? (
              <table className="table">
                <thead>
                  <tr className="bg-info">
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service._id} className="bg-info">
                      <th scope="row">{service.title}</th>
                      <td>{service.price}</td>
                      <td>
                        <button
                          onClick={() => {
                            setSelectedServiceId(service._id);
                            setShowDeleteConfirmationModal(true);
                          }}
                          className="btn btn-danger text-white"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <NotFoundDetails data="No service Found!" />
            )}
          </Container>
        ) : (
          <NotFoundDetails data="404 Not Found!" />
        )}
      </>
    </section>
  );
};

export default ManageServices;
