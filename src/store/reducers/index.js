import { combineReducers } from "redux"
import ingredientsReducer from "./ingredientReducer"
import totalPriceReducer from "./totalPriceReducer"
import purchaseReducer from "./purchaseReducer"
import ordersReducer from "./orderReducer"

const reducer = combineReducers({
    ing: ingredientsReducer,
    prc: totalPriceReducer,
    purchase: purchaseReducer,
    rdr: ordersReducer
});

export default reducer