import React from 'react'
import breadStyle from "./BurgerIngredient.module.css"
import propTypes from "prop-types"

function BurgerIngredient(props) {
    let ingredient = null;
    const ingredientEls = {
        "bread-bottom": <div className={breadStyle.BreadBottom}></div>,
        "bread-top": <div className={breadStyle.BreadTop}></div>,
        "meat": <div className={breadStyle.Meat}></div>,
        "cheese": <div className={breadStyle.Cheese}></div>,
        "salad": <div className={breadStyle.Salad}></div>,
        "bacon": <div className={breadStyle.Bacon}></div>
    };

    ingredient = ingredientEls[props.type];

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default BurgerIngredient

