import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import IngredContext from '../../context/context';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            'cheese': 1,
            'bacon': 0,
            'meat': 1,
            'salad': 1
        },
        purchased: false,
        totalPrice: 6.99,
        purchasable: true,
        loading: false,
        orderPlaced: true
    };

    // componentDidMount() {
    //     axios.get('ingredients.json')
    //         .then(response => {
    //             if (Object.keys(response.data) !== 0 && response.data.constructor === Object) {
    //                 this.setState({
    //                     ingredients: response.data
    //                 });
    //             }
    //             console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    ingredientIncrement = (e) => {
        let changedIngredient = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toLowerCase();

        let changedIngredients = {...this.state.ingredients};
        let newPrice = this.state.totalPrice;

        for (let property in changedIngredients) {
            if (property === changedIngredient) {
                changedIngredients[property] += 1;
                newPrice += 1;
            }
        }

        if (!Object.values(changedIngredients).every(item => item === 0)) {
            this.setState({
                    purchasable: true
                }
            )
        }

        this.setState({
            ingredients: changedIngredients,
            totalPrice: newPrice
            }
        );
    };

    ingredientDecrement = (e) => {
        let changedIngredient = e.target.previousElementSibling.innerHTML.toLowerCase();

        let changedIngredients = {...this.state.ingredients};
        let newPrice = this.state.totalPrice;

        for (let property in changedIngredients) {
            if (property === changedIngredient && changedIngredients[property] > 0) {
                changedIngredients[property] -= 1;
                if (newPrice >= 7.99) {
                    newPrice -= 1;
                }
            }
        }
        if (Object.values(changedIngredients).every(item => item === 0)) {
            this.setState({
                    purchasable: false
            }
            )
        }
        this.setState({
            ingredients: changedIngredients,
            totalPrice: newPrice
            }
        )
    };

    purchaseHandler = (e) => {
        this.setState({
            purchased: true
        });
    };

    closeModal = (e) => {
        this.setState({
            purchased: false
        });
    };

    continueCheckout = (e) => {
        // this.setState({
            // loading: true,
            // checkoutProceeded: true
        // });

        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Anna',
        //         adress: {
        //             street: 'Street1',
        //             zipCode: '01025',
        //             country: 'Ukraine'
        //         },
        //         email: 'email'
        //     },
        //     deliveryMethod: 'fastest'
        // };
        // axios.post('orders.json', order)
        //     .then(request=> {
        //         this.setState({
        //             loading: false
        //         });
                this.closeModal();
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading: false,
        //             orderPlaced: false
        //         });
        //         this.closeModal();
        //     });

        let queryParams = [];
        for (let ingredient in this.state.ingredients) {
            if (this.state.ingredients.hasOwnProperty(ingredient)) {
                queryParams.push(encodeURIComponent(ingredient)+'='+encodeURIComponent(this.state.ingredients[ingredient]));
            }
        }
        let query = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?'+query
        })
    };

    render() {
        let orderSummary = <OrderSummary ingredients={this.state.ingredients} closeModal={this.closeModal} continueCheckout={this.continueCheckout}/>;

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return (
            <Aux>
                <IngredContext.Provider value={{ingredients: this.state.ingredients, ingredientIncrement: this.ingredientIncrement, ingredientDecrement: this.ingredientDecrement, price: this.state.totalPrice, purchaseHandle: this.purchaseHandler, purchasable: this.state.purchasable}}>
                    <Modal visibility={this.state.purchased} closeModal={this.closeModal}>
                        {orderSummary}
                    </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls list={this.state.ingredients}/>
                </IngredContext.Provider>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
