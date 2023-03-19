import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Login from "./Component/Auth/Login/Login";
import Signup from "./Component/Auth/Signup/Signup";
import Home from "./Component/Home/Home";
import PostBlog from "./Component/Blogs/PostBlog";
import NavBar from "./Component/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Component/NoFound/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="postAdd" element={<PostBlog />} />
        </Route>
        <Route path="*" element = {<ErrorPage/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
