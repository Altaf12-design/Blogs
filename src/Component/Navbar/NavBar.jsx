import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/Images/logo.png";
import "../../Component/Styles/Styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

library.add(faHome, faSignOutAlt);
function NavBar() {
  const navigate = useNavigate();
  const xyz = localStorage.getItem("myObject");
  const storedObject = JSON.parse(xyz);
  console.log("sjhdkusb===", storedObject);
  console.log(storedObject?.isAdmin);

  const logout= ()=> {
    localStorage.clear();
    navigate("/");
  }
  return (
    <Navbar className="container bg ">
      <Navbar.Brand>
        <img className="Navbar_Brand" src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav" className="Navbar_justify">
        {storedObject?.isAdmin == false ? (
          <div style={{display:'flex',justifyContent: 'center'}}>
            <Nav className="mr-auto navIcon">
              <FontAwesomeIcon icon="home" />
              <Nav.Link>Home</Nav.Link>
            </Nav>
            
            <div>
          <Nav className="navIcon">
            <FontAwesomeIcon icon="sign-out-alt" />
            <Nav.Link onClick={() => logout()}>LOGOUT</Nav.Link>
          </Nav>
        </div>
            
          </div>
        ) : (
          <>
           <div>
          <Nav className="navIcon">
            <FontAwesomeIcon icon="sign-out-alt" />
            <Nav.Link onClick={() => logout()}>LOGOUT</Nav.Link>
          </Nav>
        </div>
          </>
        )}
      
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
