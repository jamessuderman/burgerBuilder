import React from 'react';
import PropTypes from 'prop-types';

import style from './Ingredient.css';

const ingredient = (props) => {
  let ingredient = null;

  switch(props.type) {
    case ('bread-bottom'):
      ingredient = <div className={style.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingredient = (
        <div className={style.BreadTop}>
          <div className={style.Seeds1}></div>
          <div className={style.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      ingredient = <div className={style.Meat}></div>;
      break;
    case ('cheese'):
      ingredient = <div className={style.Cheese}></div>;
      break;
    case ('lettuce'):
      ingredient = <div className={style.lettuce}></div>;
      break;
    case ('bacon'):
      ingredient = <div className={style.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default ingredient;