import * as actionTypes from "../actions";

const initialState = {
    ingredients: {
        cheese: 0,
        meat: 0,
        bacon: 0,
        salad: 0,
    },
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                }
            };

        case actionTypes.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                }
            }
        case actionTypes.REMOVE_ALL_INGREDIENTS:
            return{
                ...state,
                ingredients: {
                    cheese: 0,
                    meat: 0,
                    bacon: 0,
                    salad: 0,
                },
            }
        default:
            return { ...state }
    }
}

export default reducer;