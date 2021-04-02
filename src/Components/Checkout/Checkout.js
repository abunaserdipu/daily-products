import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const Checkout = () => {
  const { productId } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product/" + productId)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCheckout = (data) => {
    const orderDetails = {
      ...loggedInUser,
      products: products,
      checkout: data,
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your order placed successfully!");
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h5>Checkout</h5>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>{products.name}</strong>
                  </td>
                  <td>
                    <strong>1</strong>
                  </td>
                  <td>
                    <strong>${products.price}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td></td>
                  <td>
                    <strong>${products.price}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
          className="btn btn-primary"
          style={{ float: "right", borderRadius: "5px" }}
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
