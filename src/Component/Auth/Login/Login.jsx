import React, { useEffect, useState } from "react";

// import { BsFacebook } from "react-icons/bs";
// import { AiFillGoogleCircle } from "react-icons/ai";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLazyLoginUserQuery } from "../../../Api/Slices/userSlice";
import logo from "../../../assets/Images/logo.png";

import '../../Styles/Styles.css'
// import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLabel, setEmailLabel] = useState("Enter Email");
  const [passwordLabel, setPasswordLabel] = useState("Enter Password");
  const [button, setButton] = useState("Login");

  // const dispatch = useDispatch();

 
  const [adminLogin]=useLazyLoginUserQuery()

  const navigate = useNavigate();
  const handleLogin = () => {
    if (password === "" && email === "") {
      setEmailLabel("Please Enter Email");
      setPasswordLabel("Enter Password First");
      setButton("Something Missing");
    } else if (password === "" || email === "") {
      setEmailLabel("Please Enter Email");
      setPasswordLabel("Please Enter Password");
      setButton("Something Missing");
    } else {
      // personally@gmail.com
      adminLogin({ email, password }, true).then((response) => {
        console.log(response)
        const { token} = response.data
        const { user} = response.data
        localStorage.setItem("token", token);
        localStorage.setItem("useremail", user.email);
        localStorage.setItem("username", user.name);
        const myObjectString = JSON.stringify(response.data.user);
         localStorage.setItem("myObject", myObjectString)
        console.log(token)
        console.log(user);
      navigate('/home')
        

      })
    }
  };
  return (
    <>
      <div
        className="main"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container form"
          style={{
            width: "35vw",
            backgroundColor: "black",
            opacity: "0.7",
            borderRadius: "1rem",
            boxShadow: "0rem 0rem 24px 2rem ",
            border: "1rem solid black",
          }}
        >
          <div className="row">
            <div className="col-12 mt-2" style={{ justifyContent: "center",alignItems:'center',display:'flex' ,flexDirection:'column'}}>
            <img className="Navbar_Brand" src={logo} style={{width: '90%',height: '100%'}} />
            <h1 color="white">Login</h1>
             
              
            </div>
            <div className="inputs col-12" style={{display:"flex",flexDirection:'column',padding:'50px'}}>
              <input
              className="form-control border border-danger" 
                type="email"
                name={email}
                value={email}
                placeholder={emailLabel}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
               className="form-control border border-danger " 
               style={{marginTop:'20px'}}
                type="password"
                name={password}
                value={password}
                placeholder={passwordLabel}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div
              className="icons col-12"
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "-1rem",
              }}
            >
              <Button
                id="iconBtn"
                style={{
                  fontSize: "3rem",
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                }}
              >
                {/* <AiFillGoogleCircle /> */}
           
              </Button>
              <Button
                id="iconBtn"
                style={{
                  fontSize: "2.6rem",
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                }}
              >
                {/* <BsFacebook /> */}
              
              </Button>
            </div>
            <div className="col-12 d-flex justify-content-center mt-2 mb-2 gap-3">
              <Button
                className="btn btn-light"
                size="small"
                onClick={handleLogin}
              >
                {button}
              </Button>
            </div>
            <Link
              to={"/signup"}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "red",
              }}
            >
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
