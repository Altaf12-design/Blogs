import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { useAddBlogsMutation, useGetBlogsQuery, useUpdateUserByIdMutation } from "../../Api/Slices/blogSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";



const EditBlog = ({id}) => {
    const { data } = useGetBlogsQuery();
    const currentUser = data?.data.find((u) => u._id === id);
    console.log("currentuser",currentUser)
  const [title, setTitle] = useState(currentUser.title);
  const [description, setDescription] = useState(currentUser.description);
  const [image, setImage] = useState(null);
  const [modal, setModal] = useState(false);


  const [updateUserById] = useUpdateUserByIdMutation();

  const toggle = () => setModal(!modal);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUserById({
      id: id,
      payload: {
        title: title,
        description: description,
      },
    });
    toggle();
  };
  return (
    <>
   <FontAwesomeIcon color="danger" onClick={toggle} 
                  style={{ marginRight: "20px" }}
                  icon={faEdit}
                />
  <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle}>Edit Blog</ModalHeader>
    <ModalBody>
    <div
      className="d-flex"
      style={{ justifyContent: "center", marginTop: "10px" }}
    >
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Blog Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            defaultValue={title}
            onChange={onTitleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Blog Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter description"
            defaultValue={description}
            onChange={onDescriptionChange}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="image">Upload Image</Label>
          <Input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={onImageChange}
          />
        </FormGroup> */}
        <div style={{marginTop:'40px',display:'flex',justifyContent:'center'}}>
        <Button color="primary">Submit</Button>
        </div>
    
      </Form>
    </div>
    </ModalBody>

  </Modal>
  </>
  );
};

export default EditBlog;
