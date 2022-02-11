import * as actionTypes from "../actions";
import { INGREDIENTS_PRICES } from "../../config"

const initialState = {
    totalPrice: 3,
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredient]
            }
        case actionTypes.REDUCE_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredient]
            }
        case actionTypes.RESET_PRICE:
            return {
                ...state,
                totalPrice: 3
            }
        default:
            return { ...state }
    }
}

export default reducer