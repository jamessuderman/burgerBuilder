import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  lettuce: .4,
  cheese: .5,
  meat: 1.3,
  bacon: .75
};

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 5,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('https://burgerbuilder-477e3.firebaseio.com/ingredients.json')
      .then(response => {this.setState({ingredients: response.data})})
      .catch(error => this.setState({error: true}));
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(key => {
      return ingredients[key]
    }).reduce((sum, el) => {
     return sum + el;
    }, 0);
    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;
    const price = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + price;
    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    this.updatePurchaseState(updateIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;
    const price = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - price;
    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    this.updatePurchaseState(updateIngredients);
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.setState({loading: true});

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'James Suderman',
        address:  {
          street: '209 Flower Ridge',
          city: 'Fort Worth',
          state: 'TX',
          zipCode: '76108'
        },
        email: 'jamessuderman@gmail.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
        })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
      });
  };

  render() {

    const disabledInfo = {...this.state.ingredients};
    let orderSummary = null;
    let burger = this.state.error ? <p>Unable to get ingredients</p> : <Spinner/>;

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    if(this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls ingredientAdded={this.addIngredientHandler}
                         ingredientRemoved={this.removeIngredientHandler}
                         disabled={disabledInfo}
                         ordered={this.purchaseHandler}
                         purchaseable={this.state.purchaseable}
                         price={this.state.totalPrice}/>
        </Fragment>);

      orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                   price={this.state.totalPrice}
                                   purchaseCancelled={this.purchaseCancelHandler}
                                   purchaseContinued={this.purchaseContinueHandler}/>;
    }

    if(this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);