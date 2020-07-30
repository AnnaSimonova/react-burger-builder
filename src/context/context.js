import React from 'react';

const ingredContext = React.createContext({
    ingredients: {
        'bread-top': 1,
        'cheese': 1,
        'bacon': 0,
        'meat': 0,
        'salad': 1,
        'bread-bottom': 1
    },
    ingredientIncrement: () => {},
    ingredientDecrement: () => {},
    price: 6.99,
    purchaseHandle: () => {},
    purchasable: true
});

export default ingredContext;
