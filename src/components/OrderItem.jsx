import React from 'react';
import AppContext from "@context/AppContext"
import "@styles/OrderItem.scss";
import close from "@icons/icon_close.png";
import { useContext } from "react";

const MyOrderSidePanel = ({product}) => {
  const {removeFromCart} = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product);
  }
    return (
      <div className="OrderItem">
        <figure>
          <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <img src={close} alt="close" onClick={() => handleRemove(product)} />
      </div>
    );
}

{/*OrderItem*/}

export default MyOrderSidePanel