import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngrediant'
import st from "./Burger.module.css"
import propTypes from 'prop-types'

function Burger({ ingredients }) {
    // {salad : 2, ...} => [[salad, 2], ...]
    // [["salad", 2], ...] => [["salad","salad"], ...]
    const ingredientsArr = Object.entries(ingredients).map(arr => [...Array(arr[1])].fill(arr[0]));

    let middleBreadOutput = <h3>im just a bread 😟🥖</h3>;

    if (ingredientsArr.flat().length)
        middleBreadOutput = ingredientsArr.map((arr, i1) => arr.map((type, i2) => <BurgerIngredient type={type} key={`${i1}_${i2}`} />))

    return (
        <div className={st.Burger}>
            <BurgerIngredient type="bread-top" />
            {middleBreadOutput}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

Burger.propTypes = {
    ingredients: propTypes.object.isRequired
}

export default Burger;
