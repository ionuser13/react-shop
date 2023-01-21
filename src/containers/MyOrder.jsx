import React from 'react';
import OrderItem from "../components/OrderItem";
import flecha from "@icons/flechita.svg";
import "../styles/MyOrder.scss";

const MyOrder = () => {
    return (
        <div className='MyOrder'>
            <div className='title-container'>
                <img src={flecha} alt="arrow" />
				<p className="title">My order</p>
            </div>
            <div className="my-order-content">
                <OrderItem />
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default MyOrder