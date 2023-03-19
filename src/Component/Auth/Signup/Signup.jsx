import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../../Api/Slices/registerSlice";
import "../../Styles/Styles.css";
export default function RegisterForm(props) {
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = addUser({ name, email, password });
      console.log("User registered successfully:", result);
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };

  return (
    <div className="Auth-form-container main">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 onClick={() => navigate("/")} className="Auth-form-title">
            Sign In
          </h3>
          <div className="text-center">
            Already registered? <span className="link-primary">Sign In</span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2"></p>
        </div>
      </form>
    </div>
  );
}
