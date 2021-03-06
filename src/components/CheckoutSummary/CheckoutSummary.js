import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';

import Style from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return(
    <div className={Style.CheckoutSummary}>
      <h1 style={{margin: 'auto'}}>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
};

export default checkoutSummary;