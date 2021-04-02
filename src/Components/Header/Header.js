import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: "blue" }} to="/">
            <strong>Daily Products</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/home">
                <strong>Home</strong>
              </Link>
              <Link className="nav-link" to="/orders">
                <strong>Orders</strong>
              </Link>
              <Link className="nav-link" to="/addProduct">
                <strong>Admin</strong>
              </Link>
              <Link className="nav-link" to="/login">
                <strong>Log In</strong>
              </Link>
              <h6>{loggedInUser.name}</h6>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
