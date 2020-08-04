import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    let ingredients = [];
    for(let i in props.ingredients) {
        if (props.ingredients.hasOwnProperty(i) && props.ingredients[i] != 0) {
            ingredients.push(i+' ('+props.ingredients[i]+')');
        }
    }

    const ingredients_final = ingredients.join(', ');
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients_final}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;
