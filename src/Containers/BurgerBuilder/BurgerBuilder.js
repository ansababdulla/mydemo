import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INCREDIENTS_PRICES = {
    salad:50,
    cheese:20,
    meat:50,
    bacon:10
}
class BurgerBuilder extends Component{
    state={
        incredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
        },
        totalPrice:100,
        purchasable:false,
        purchasing:false
    }
    updatePurchaseState (incredients) {
        // const incredients = {
        //     ...this.state.incredients
        // }
        const sum = Object.keys(incredients)
            .map(igKey => {
                return incredients[igKey];
                
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
        this.setState({
            purchasable : sum>0});
    }
    addIncredientsHandler = (type) => {
        const oldCount = this.state.incredients[type];
        const updatedCount = oldCount + 1;
        const updatedIncredients = {
            ...this.state.incredients
            
        };
        updatedIncredients[type] = updatedCount; 
        const priceAddition = INCREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,incredients:updatedIncredients});
        console.log(this.state);
        this.updatePurchaseState(updatedIncredients);
       
        
        
    }
    
    removeIncredientsHandler = (type) => {
        const oldCount = this.state.incredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIncredients = {
            ...this.state.incredients
        };
        updatedIncredients[type] = updatedCount; 
        const priceDeletion = INCREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeletion;
        this.setState({totalPrice:newPrice,incredients:updatedIncredients});
        console.log(this.state);
        this.updatePurchaseState(updatedIncredients);
        
    }
    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});

    }

    purchaseContinueHandler = () => {
        alert('you continue');

    }

    

    render(){
        const disabledInfo = {
            ...this.state.incredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing}
                            Modalclosed ={this.purchaseCancelHandler}>
                    <OrderSummary incredients={this.state.incredients}
                    cancelPurchase={this.purchaseCancelHandler}
                    continuePurchase={this.purchaseContinueHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger incredients={this.state.incredients}/>
                <BuildControls incredientsAdded={this.addIncredientsHandler}
                incredientsDeleted = {this.removeIncredientsHandler}
                disabled={disabledInfo} 
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchasing ={this.purchaseHandler}
                /> 

                
            </Aux>

        );
    }
}
export default BurgerBuilder;