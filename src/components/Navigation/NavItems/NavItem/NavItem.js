import React from 'react';

import Style from './NavItem.css';

const navItem = (props) => {
  return(
    <li className={Style.NavItem}>
      <a className={props.active ? Style.active : null} href={props.link}>{props.children}</a>
    </li>
  );
};

export default navItem;