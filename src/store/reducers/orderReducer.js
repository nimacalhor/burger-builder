import * as actionTypes from "../actions/actionTypes"
import { updateObj } from "../utility"

const initialState = {
    orders: [],
    loading: false,
    error: false
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_SUCCESS: return updateObj(state, {
            orders: Object.values(action.orders),
            loading: false
        })
        case actionTypes.FETCH_ORDERS_START: return updateObj(state, {loading: true})
        case actionTypes.FETCH_ORDERS_FAIL: return updateObj(state, {loading: false, error: action.error})
        default: return state
    }
}

export default reducer;