import classes from '../BurgerIncredients/BurgerIncredients.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BurgerIncredients extends Component{
    render(){
        let incredient=null;
        switch(this.props.type){
            case ('bread-bottom'):
                incredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                incredient = ( <div className={classes.BreadTop}>
                                <div className={classes.Seeds1}></div>
                                <div className={classes.Seeds2}></div>)
                                </div> );
                break;
            case ('meat'):
                incredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                incredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):  
                incredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                incredient = <div className={classes.Salad}></div>;
                break;
            default:
                incredient=null;
    
        }
    
    return incredient;

    }
}
BurgerIncredients.propTypes = {
    type: PropTypes.string.isRequired 
}

export default BurgerIncredients;