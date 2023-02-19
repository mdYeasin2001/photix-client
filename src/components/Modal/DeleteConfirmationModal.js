import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { DELETE_SERVICE_API } from "../../services/apiUrl";
import LoadingButton from "../uiHelper/LoadingButton";

const DeleteConfirmationModal = ({
  show,
  setShowDeleteConfirmationModal,
  selectedServiceId,
  setSelectedServiceId,
  setReload,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const deleteService = () => {
    setSubmitting(true);
    // console.log("from modal", selectedService);
    axios
      .delete(`${DELETE_SERVICE_API}/${selectedServiceId}`)
      .then((res) => {
        setSubmitting(false);
        // console.log(res);
        if (res.data.status === 'success') {
          toast.success("Service deleted successfully");
          setReload(new Date().getTime());
          setShowDeleteConfirmationModal(false);
        } else {
          toast.error('Something went wrong!')
        }
      })
      .catch((err) => {
        setSubmitting(false);
        // console.log(err);
        toast.error("Oops! Error deleting service");
      });
  };
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      className="text-center"
    >
      <div className="modal-body">
        <h5 className="text-dark fw-normal fs-5">
          Your are Going to delete a service. Are you sure you want to delete?
        </h5>
        <div className="d-flex justify-content-center mt-3 gap-2">
          <button
            onClick={() => {
              setSelectedServiceId(null);
              setShowDeleteConfirmationModal(false);
            }}
            className="btn btn-primary"
          >
            No
          </button>
          <button
            onClick={() => deleteService()}
            className="btn btn-danger text-white"
          >
            {submitting ? <LoadingButton /> : "Yes"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
