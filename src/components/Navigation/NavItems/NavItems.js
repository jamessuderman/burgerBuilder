import React from 'react';
import NavItem from './NavItem/NavItem';

import Style from './NavItems.css';

const navItems = (props) => {
  return(
    <ul className={Style.NavItems}>
      <NavItem link="/" active>Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default navItems;