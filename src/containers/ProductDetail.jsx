import React from 'react';
import ProductInfo from "../components/ProductInfo";
import "../styles/productSidePanel.scss";

const ProductDetail = () => {
    return (
        <div className="product-detail">
            <div className="product-detail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo />
        </div>
    )
}

export default ProductDetail