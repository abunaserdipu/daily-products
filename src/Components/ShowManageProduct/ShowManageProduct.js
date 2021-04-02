import { faDollarSign, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ShowManageProduct = ({ product }) => {
  const deleteProduct = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Product deleted successfully!");
        }
      });
  };
  return (
    <tr>
      <td>{product.name}</td>
      <td>
        <FontAwesomeIcon icon={faDollarSign} />
        {product.price}
      </td>
      <td>
        <button
          onClick={() => deleteProduct(product._id)}
          className="btn btn-danger btn-sm"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default ShowManageProduct;
