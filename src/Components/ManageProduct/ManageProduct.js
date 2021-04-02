import React, { useEffect, useState } from "react";
import ShowManageProduct from "../ShowManageProduct/ShowManageProduct";
import Sidebar from "../Sidebar/Sidebar";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/manageProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-9">
          <h5 style={{ textAlign: "center", color: "blue" }}>Manage Product</h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ShowManageProduct product={product}></ShowManageProduct>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
