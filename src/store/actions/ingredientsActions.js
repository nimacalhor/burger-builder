import * as actionTypes from "./actionTypes"
import axios from "../../axios-order"

export const addIngredient = (ingredient) => ({
    type: actionTypes.ADD_INGREDIENTS,
    ingredient
})

export const removeIngredient = (ingredient) => ({
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredient
})

export const removeAllIngredient = () => ({
    type: actionTypes.REMOVE_ALL_INGREDIENTS
})

const ingredientsFetchError = () => ({ type: actionTypes.INGREDIENTS_FETCH_ERROR })
const ingredientsFetchSuccess = () => ({ type: actionTypes.INGREDIENTS_FETCH_SUCCESS })

const setIngredients = (ingredients) => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients
})

export const initIngredients = () => async function (dispatch) {
    try {
        const { data } = await axios.get("ingredients.json");
        dispatch(setIngredients(data))
        dispatch(ingredientsFetchSuccess)
    } catch (err) {
        dispatch(ingredientsFetchError)
    }
}
