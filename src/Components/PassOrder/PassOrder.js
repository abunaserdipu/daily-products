import {
  faDollarSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PassOrder = ({ order }) => {
  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={faUser} /> {order.name}
      </td>
      <td>{order.products.name}</td>
      <td>
        <FontAwesomeIcon icon={faDollarSign} />
        {order.products.price}
      </td>
      <td>{new Date(order.orderTime).toDateString("dd/MM/yyy")}</td>
    </tr>
  );
};

export default PassOrder;
