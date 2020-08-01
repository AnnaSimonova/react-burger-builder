import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    state= {
        ingredients: {}
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({
            ingredients: ingredients
        });
    }

    cancelHandler = () => {
         this.props.history.goBack();
    };

    continueHandler = () => {
        this.props.history.replace('/checkout/contact-details');
    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancel={this.cancelHandler} checkoutContinue={this.continueHandler}/>
            </div>
        );
    };
}

export default Checkout;
