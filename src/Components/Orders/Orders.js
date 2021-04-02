import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PassOrder from "../PassOrder/PassOrder";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-coast-15847.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div className="container">
        <Link style={{ textDecoration: "none"}} to="/">
          <h4 style={{ color: "blue" }}>Daily Products</h4>
        </Link>
        <div className="card my-5">
          <div className="card-header">
            <h5>Your Orders!</h5>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <PassOrder order={order}></PassOrder>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
