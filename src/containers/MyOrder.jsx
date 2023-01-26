import React, { useContext } from 'react';
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext"
import flecha from "@icons/flechita.svg";
import "@styles/MyOrder.scss";

const MyOrder = () => {
    const {state} = useContext(AppContext);
    const sumPrices = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum
    }
    return (
        <div className='MyOrder'>
            <div className='title-container'>
                <img src={flecha} alt="arrow" />
				<p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map(item => {
                    return (
                        <OrderItem product={item} key={`orderItem-${item.id}`}/>
                    )
                })}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$ {sumPrices()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default MyOrder