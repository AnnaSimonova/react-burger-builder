import React, {useContext} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import OrderContext from '../../../context/context';

const OrderSummary = (props) => {
    let ingredients_list = [];

    Object.keys(props.ingredients).map((item) => {
        ingredients_list.push(<li key={item}>{item[0].toUpperCase() + item.slice(1)}: {props.ingredients[item]}</li>);
    });

    const orderContext = useContext(OrderContext);

    return(
        <Aux>
            <h3>Your order summary</h3>
            <p>You ordered delicious burger with the following ingredients:</p>
            <ul>
                {ingredients_list}
            </ul>
            <h4>Total price: {orderContext.price}</h4>
            <p>Continue to checkout?</p>
            <Button clicked={props.closeModal} btnType='Danger'>Cancel</Button>
            <Button clicked={props.continueCheckout} btnType='Success'>Continue</Button>
        </Aux>
    )
};

export default OrderSummary;
