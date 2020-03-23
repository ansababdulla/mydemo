import React from 'react';
import  classes from '../Burger/Burger.css';
import BurgerIncredients from './BurgerIncredients/BurgerIncredients';

const burger = (props) => {
    let transformedIncredients=Object.keys(props.incredients)
    .map(igKey => {
             return[...Array(props.incredients[igKey])].map((_, i)  => 
            <BurgerIncredients key={igKey+i} type = {igKey}/>
            );
        });
    let newincredients = transformedIncredients.reduce((arr,el) => {
        return arr.concat(el)
    },[]); 
    if(newincredients.length === 0)
        {
            newincredients=<p>please start by adding incredients</p>
        }   
    console.log(newincredients);
    return(
        <div className={classes.Burger}>
            <BurgerIncredients type="bread-top"/>
            {newincredients}
            <BurgerIncredients type="bread-bottom"/>
        </div>
    );
}

export default burger;