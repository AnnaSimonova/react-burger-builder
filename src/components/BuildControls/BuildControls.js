import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import OrderBtn from './OrderBtn/OrderBtn';

import classes from './BuildControls.module.css';

const buildControls = (props) => {
    let ingredients_list = [];

    Object.keys(props.list).map((item) => {
        ingredients_list.push(<BuildControl ingredient={item} quantity={props.list[item]} key={item}/>);
    });

    return (
        <div className={classes.BuildControls}>
            {ingredients_list}
            <OrderBtn/>
        </div>
    );
};

export default buildControls;
