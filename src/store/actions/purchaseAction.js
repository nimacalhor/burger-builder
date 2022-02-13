import * as actionTypes from "./actionTypes";
import axios from "../../axios-order"

const purchaseSuccess = (orderId, orderData) => ({type: actionTypes.PURCHASE_SUCCESS, orderId, orderData})
const purchaseError = (errMsg) => ({type: actionTypes.PURCHASE_ERROR, errMsg});

const orderIsPosting = () => ({type: actionTypes.ORDER_IS_POSTING})
const orderIsPosted = () => ({type: actionTypes.ORDER_IS_POSTED})

export const postOrder = (orderData) => async dispatch => {
    try {
        dispatch(orderIsPosting())
        const res = await axios.post("orders.json", orderData);
        dispatch(purchaseSuccess(res, orderData));
        dispatch(orderIsPosted())
    } catch (err) {
        dispatch(purchaseError(err.message))        
    }
}

export const purchaseInit = () => ({type: actionTypes.PURCHASE_INIT})