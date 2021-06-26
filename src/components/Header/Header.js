import React from 'react';
import Search from "../Search/Search";
import s from '../../index.module.css'

const Header = () => {

  return (

  <header className={s.sectionOuter}>
    <div className={`${s.sectionInner} ${s.sectionInner_header}`}>
      <div className={s.topbar}>

        <Search />
        
        <ul className={s.userOptions}>
          <li className={s.userOptions__item}>
            <span className={s.userOptions__link}>
              <span className={`${s.userOptions__icon} ${s.userOptions__icon_shoppingCart}`} />
            </span>
          </li>
          <li className={s.userOptions__item}>
            <span className={s.userOptions__link}>
              <span className={`${s.userOptions__icon} ${s.userOptions__icon_userAccount}`} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </header>
  );
};

export default Header;