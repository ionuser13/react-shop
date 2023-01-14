import React from 'react';
import "../styles/myOrdersPanel.scss"

const MyOrdersPanel = () => {
    return (
      <div class="order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="./icons/flechita.svg" alt="arrow" />
      </div>
    );
}

{/*Order*/}

export default MyOrdersPanel