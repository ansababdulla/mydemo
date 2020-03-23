import React from 'react';
import classes from '../BuildControls/BuildControls.css'
import BuildControl from '../../Burger/BuildControls/BuildControl/BuildControl'

const controls = [
   { label:"Salad", type:"salad"},
   { label:"Cheese", type:"cheese"},
   { label:"Meat", type:"meat"},
   { label:"Bacon", type:"bacon"},
];

const buildControls = (props) => (
    

    <div className={classes.BuildControls}>
        <p><strong>Price:{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label}
             label={ctrl.label}
             added={() => props.incredientsAdded(ctrl.type)}
             removed = {() => props.incredientsDeleted(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton}
         disabled={!props.purchasable}
         onClick={props.purchasing}
         >ORDER NOW!!</button>


    </div>

);

export default buildControls