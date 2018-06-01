import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Style from './SideDrawer.css';

const sideDrawer = (props) => {
  let attachedClasses = [Style.SideDrawer, Style.Close];

  if(props.open) {
    attachedClasses = [Style.SideDrawer, Style.Open];
  }

  return(
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={Style.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavItems/>
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;