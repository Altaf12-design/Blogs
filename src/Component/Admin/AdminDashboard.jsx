import React from "react";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PostBlog from "../Blogs/PostBlog";
import {
  useGetBlogsQuery,
  useUpdateUserByIdMutation,
} from "../../Api/Slices/blogSlice";
import EditBlog from "../Blogs/EditBlog";
import DeleteBlog from "../Blogs/DeleteBlog";
import '../Styles/Styles.css'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { data } = useGetBlogsQuery();
  const list = data?.data;
  console.log("blogsQuery", list);
  return (
    <div className="container adminDashboard">
      <Card>
        <Card
          className="d-flex"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Admin Dashboard</h2>
          <div>
            <button
              onClick={() => navigate("postAdd")}
              className="btn btn-danger"
            >
              <PostBlog />
            </button>
          </div>
        </Card>
        <Card
          className="d-flex "
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          <h5>BLOG IMAGE</h5>
          <h5>BLOG NAME</h5>
          <h5>ACTION</h5>
        </Card>
        {list?.map((i) => {
          return (
            <Card
              className="d-flex"
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                padding: "20px",
                marginTop: "10px",
              }}
            >
              <div className="d-flex profile ">
                <FontAwesomeIcon icon={faUser} />
                {"      "}
                <span>Images</span>
              </div>
              <p> {i?.title}</p>
              <div>
                <EditBlog id={i._id}/>
              <DeleteBlog id={i._id} />


              </div>
            </Card>
          );
        })}
      </Card>
    </div>
  );
};

export default AdminDashboard;
