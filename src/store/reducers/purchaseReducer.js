import * as actionTypes from "../actions/actionTypes"
import { updateObj } from "../utility"

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ORDER_IS_POSTING: return updateObj(state, { loading: true });
        case actionTypes.ORDER_IS_POSTED: return updateObj(state, { loading: false });
        case actionTypes.PURCHASE_SUCCESS: return updateObj(state, {
            orders: [...state.orders, { ...action.orderData, id: action.orderId }]
            , purchased: true
        })
        case actionTypes.PURCHASE_ERROR: return updateObj(state, { purchased: false })
        default: return state
    }
}

export default reducer