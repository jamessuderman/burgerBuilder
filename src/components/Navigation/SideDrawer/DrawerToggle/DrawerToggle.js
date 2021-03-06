import React from 'react';

import Style from './DrawerToggle.css';

const drawerToggle = (props) => {
  return(
    <div className={Style.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;