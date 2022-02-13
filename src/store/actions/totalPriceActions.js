import * as actionTypes from "./actionTypes"

export const addPrice = (ingredient) => ({
    type: actionTypes.ADD_PRICE,
    ingredient
})

export const reducePrice = (ingredient) => ({
    type: actionTypes.REDUCE_PRICE,
    ingredient
})

export const resetPrice = () => ({
    type: actionTypes.RESET_PRICE,
})
