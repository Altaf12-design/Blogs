import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import {
  
  useDeleteBlogByIdMutation,

} from "../../Api/Slices/blogSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteBlog = ({ id }) => {
  const [modal, setModal] = useState(false);

  const [deleteBlogs] = useDeleteBlogByIdMutation();

  const toggle = () => setModal(!modal);

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteBlogs(id)
    toggle();
  };
  return (
    <>
      <FontAwesomeIcon
        con
        onClick={toggle}
        style={{ color: "red" }}
        icon={faTrash}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Blog</ModalHeader>
        <ModalBody>
          <h5 style={{ justifyContent: "center", display: "flex" }}>
            {" "}
            Are you sure you want to delete this blog?
          </h5>
          <div
            className="d-flex"
            style={{ justifyContent: "center", marginTop: "10px" }}
          >
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "space-evenly",

                width: "60%",
              }}
            >
              <Button onClick={(e) => handleSubmit(e)} color="danger">
                Delete
              </Button>
              <Button color="info">Cancle</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DeleteBlog;
