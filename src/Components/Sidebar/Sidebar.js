import { faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <h4>Daily Products</h4>
      </Link>
      <br />
      <Link to="/addProduct">
        <FontAwesomeIcon icon={faPlus} /> Add Product
      </Link>
      <br />
      <Link to="/manageProduct">
        <FontAwesomeIcon icon={faTasks} /> Manage Product
      </Link>
    </div>
  );
};

export default Sidebar;
