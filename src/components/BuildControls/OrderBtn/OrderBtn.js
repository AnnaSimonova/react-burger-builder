import React, { useContext } from 'react';
import OrderContext from '../../../context/context';
import classes from '../BuildControls.module.css';

const OrderBtn = (props) => {
    const orderContext = useContext(OrderContext);

    return (
        <div>
            <h4>Total price: {orderContext.price}$</h4>
            <button className={classes.OrderButton} onClick={orderContext.purchaseHandle}
                    disabled={(!orderContext.purchasable)}
             >Order Button</button>
        </div>
    )
};

export default OrderBtn;
