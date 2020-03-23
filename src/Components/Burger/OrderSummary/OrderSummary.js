import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const incredientsSummary = Object.keys(props.incredients)
        .map(igKey => {
        return <li key ={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span>:{props.incredients[igKey]}</li>
        });
    return (
         <Aux>
            <h3>your order summary:</h3>
            <p>your delecious ingredients are:</p>
            <ul>
                {incredientsSummary}
            </ul>
            <p>continue to checkout?</p>
    <p>Your total amount is:{props.price}</p>
            <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    
    );
};

export default orderSummary;