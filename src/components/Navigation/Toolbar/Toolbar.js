import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';

import Style from './Toolbar.css';

const toolbar = (props) => {
  return(
    <header className={Style.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className={Style.Logo}>
        <Logo/>
      </div>
    </header>
  );
};

export default toolbar;