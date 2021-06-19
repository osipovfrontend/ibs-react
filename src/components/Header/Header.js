import React from 'react';
import Search from "../Search";

const Header = () => {

  const onSearchInput = (text) => {

  }

  // document.querySelector('.search-panel__input').addEventListener('input', function() {
  //   let val = this.value.trim().toLowerCase();
  //   let elasticItems = document.querySelectorAll('.product-list__title');
  //   if (val != '') {
  //     elasticItems.forEach(function(elem) {
  //       if (elem.innerText.toLowerCase().search(val) == -1) {
  //         elem.closest('.product-list__item').classList.add('hide');
  //       }
  //       else {
  //         elem.closest('.product-list__item').classList.remove('hide');
  //       }
  //     });
  //   }
  //   else {
  //     elasticItems.forEach(function(elem) {
  //       elem.closest('.product-list__item').classList.remove('hide');
  //     })
  //   }
  // });




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