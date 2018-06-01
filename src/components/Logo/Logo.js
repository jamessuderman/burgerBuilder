import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

import Style from './Logo.css';

const logo = (props) => {
  return(
    <div className={Style.Logo}>
      <img src={burgerLogo} alt="Burger Builder"/>
    </div>
  );
};

export default logo;