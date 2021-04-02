import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const history = useHistory();
  const handleBook = (product) => {
    history.push(`checkout/${product}`);
  };
  return (
    <div className="col-md-4 g-4">
      <div className="card text-center">
        <img className="card-img-top" src={product.imageURL} alt="" />
        <h3 className="card-title">{product.name}</h3>
        <p style={{ color: "blue" }}>
          <h5>
            <FontAwesomeIcon icon={faDollarSign} />
            {product.price}
          </h5>
        </p>
        <button
          style={{ float: "right" }}
          onClick={() => handleBook(product._id)}
          className="btn btn-primary"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
