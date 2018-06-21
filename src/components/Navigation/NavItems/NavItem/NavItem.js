import React from 'react';
import { NavLink } from 'react-router-dom';

import Style from './NavItem.css';

const navItem = (props) => {
  return(
    <li className={Style.NavItem}>
      <NavLink activeClassName={Style.active} to={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default navItem;