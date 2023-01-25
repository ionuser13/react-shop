import React, { useState, useContext } from 'react';
import "@styles/header.scss";
import Menu from "@components/DesktopMenu";
import DesktopMobile from "@components/DesktopMobile"
import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import  shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
      setToggle(!toggle);
    }

    const [mobtog, setMobtog] = useState(false);
    const handleMobtog = () => {
      setMobtog(!mobtog);
    }

    return (
      <nav>
        <img src={menuIcon} alt="menu" className="menu" onClick={handleMobtog} />
        {mobtog && <DesktopMobile />}
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
            </li>
            <li className="navbar-shopping-cart">
              <img src={shoppingCart} alt="shopping cart" />
              <div>{state.cart.length}</div>
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
      </nav>
    );
}
export default Header