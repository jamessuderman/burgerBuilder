import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import Style from './Burger.css';

const burger = (props) => {
  
  let burgerIngredients = Object.keys(props.ingredients).map(key => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <Ingredient type={key} key={key + i}/>;
    });
  }).reduce((arr, el) => {return arr.concat(el)}, []);

  if(burgerIngredients.length === 0) {
    burgerIngredients = <p>Please Add Ingredients</p>
  }
  
  return(
    <div className={Style.Burger}>
      <Ingredient type="bread-top"/>
      {burgerIngredients}
      <Ingredient type="bread-bottom"/>
    </div>
  );
};

export default burger;