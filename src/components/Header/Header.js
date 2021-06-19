import React from 'react';
import Search from "../Search/Search";

const Header = () => {

  return (

  <header className="section-outer">
    <div className="section-inner section-inner_header">
      <div className="topbar">

        <Search />
        
        <ul className="user-options">
          <li className="user-options__item">
            <a href="" className="user-options__link">
              <span className="user-options__icon user-options__icon_shopping-cart"></span>
            </a>
          </li>
          <li className="user-options__item">
            <a href="" className="user-options__link">
              <span className="user-options__icon user-options__icon_user-account"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  );
};

export default Header;