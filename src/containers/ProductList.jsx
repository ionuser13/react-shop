import React from 'react';
import CardsContainer from '../components/CardsContainer';
import "../styles/cardsContainer.scss";

const ProductList = () => {
    return (
        <section className="main-container">
            <div className="cards-container">
                <CardsContainer />
            </div>
        </section>
    );
}

export default ProductList