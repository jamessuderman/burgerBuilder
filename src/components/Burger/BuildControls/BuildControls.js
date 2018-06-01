import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

import Style from './BuildControls.css';


const controls = [
  {label: 'lettuce', type: 'lettuce'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
  return(
    <div className={Style.BuildControls}>
      <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label}
                      label={ctrl.label}
                      added={() => props.ingredientAdded(ctrl.type)}
                      removed={() => props.ingredientRemoved(ctrl.type)}
                      disabled={props.disabled[ctrl.type]}/>
      ))}
      <button className={Style.OrderButton}
              disabled={!props.purchaseable}
              onClick={props.ordered}>ORDER NOW</button>
    </div>
  );
};

export default buildControls;