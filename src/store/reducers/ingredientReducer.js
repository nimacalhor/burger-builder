import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../utility";

const initialState = {
    ingredients: null,
    fetchError: false
}

const reducer = function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.ADD_INGREDIENTS: return updateObj(state, {
            ingredients: {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] + 1
            }
        });
        case actionTypes.REMOVE_INGREDIENTS: return updateObj(state, {
            ingredients: {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] + 1
            }
        });

        case actionTypes.REMOVE_ALL_INGREDIENTS: return updateObj(state, {
            ingredients: {
                cheese: 0,
                meat: 0,
                bacon: 0,
                salad: 0,
            }
        })
        case actionTypes.SET_INGREDIENTS: return updateObj(state, { ingredients: { ...action.ingredients } })

        case actionTypes.INGREDIENTS_FETCH_ERROR: return updateObj(state, { fetchError: true });
        case actionTypes.INGREDIENTS_FETCH_SUCCESS: return updateObj(state, { fetchError: false });

        default:
            return { ...state }
    }
}

export default reducer;