import * as actionTypes from "./actionTypes";
import axios from "../../axios-order"

export const fetchOrdersSuccess = (orders) => ({ type: actionTypes.FETCH_ORDERS_SUCCESS, orders })
export const fetchOrdersFail = (error) => ({ type: actionTypes.FETCH_ORDERS_FAIL, error })
export const fetchOrdersStart = () => ({ type: actionTypes.FETCH_ORDERS_START })
export const fetchOrders = () => async dispatch => {
    try {
        const { data } = await axios.get("orders.json");
        console.log(data)
        dispatch(fetchOrdersSuccess(data))
    } catch (err) {
        dispatch(fetchOrdersFail(err));
        console.log(err)
    }
}