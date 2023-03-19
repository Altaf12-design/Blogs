import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { useAddBlogsMutation } from "../../Api/Slices/blogSlice";

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImage] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onImageChange = (e) => setImage(e.target.files[0]);

  const [postImageMutation, { loading, error }] = useAddBlogsMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    postImageMutation({
      title,
      description,
 
    })
      .then((response) => {
        // handle success response
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log("error", error);
      });
      toggle()
  };

  return (
    <>
    <Button color="danger" onClick={toggle}>
    Add Blog
  </Button>
  <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle}>Add Blog</ModalHeader>
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
            value={title}
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
            value={description}
            onChange={onDescriptionChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Upload Image</Label>
          <Input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={onImageChange}
          />
        </FormGroup>
        <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
        <Button color="primary">Submit</Button>
        </div>
     
      </Form>
    </div>
    </ModalBody>

  </Modal>
  </>
  );
};

export default PostBlog;
