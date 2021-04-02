import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    if (data) {
      alert("Product added successfully!");
    }
    const productData = {
      name: data.name,
      imageURL: imageURL,
      price: data.price,
    };
    const url = `http://localhost:5000/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side data", res));
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "052a6e49d0e17bb0f07b299382d4d0fa");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <h5 style={{ textAlign: "center", color: "blue" }}>Add Product</h5>
          <div className="container">
            <div className="card p-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="name"
                  className="form-control"
                  placeholder="Product Name"
                  ref={register}
                />
                <br />
                <input
                  name="price"
                  className="form-control"
                  type="number"
                  placeholder="Price"
                  ref={register}
                />
                <br />
                <input
                  name="file"
                  className="form-control"
                  type="file"
                  onChange={handleImageUpload}
                />
                <br />

                <input type="submit" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
