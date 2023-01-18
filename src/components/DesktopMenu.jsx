import React from 'react';
import "../styles/menu.scss"

const DesktopMenu = () => {
    return (
      <div className="Menu">
        <ul>
          <li>
            <a href="/" className="title">
              My orders
            </a>
          </li>

          <li>
            <a href="/">My account</a>
          </li>

          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
    );
}
{/*Menu*/}
export default DesktopMenu