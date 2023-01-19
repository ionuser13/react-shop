import React from 'react';
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
    return (
        <div className="ProductDetail">
            <div className="product-detail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo />
        </div>
    )
}

export default ProductDetail