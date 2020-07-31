import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    let ingredients_components = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
            return <BurgerIngredient type={ingredient} key={ingredient + i}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (ingredients_components.length === 0) {
        ingredients_components = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredients_components}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;
