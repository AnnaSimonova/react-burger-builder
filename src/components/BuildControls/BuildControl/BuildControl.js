import React, { useContext } from 'react';
import IngredContext from '../../../context/context';

import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    const ingredContext = useContext(IngredContext);

    return (
        <div className={classes.BuildControl}>
            <span className={classes.Label}>{props.ingredient[0].toUpperCase() + props.ingredient.slice(1)}</span>
            <button className={classes.Less} onClick={ingredContext.ingredientDecrement}>-</button>
            <strong>{props.quantity}</strong>
            <button className={classes.More} onClick={ingredContext.ingredientIncrement}>+</button>
        </div>
    )
};

export default BuildControl;
