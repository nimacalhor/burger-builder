import { combineReducers } from "redux"
import ingredientsReducer from "./reducers/ingredientReducer"
import totalPriceReducer from "./reducers/totalPriceReducer"

const reducer = combineReducers({
    ing: ingredientsReducer,
    prc: totalPriceReducer
});

export default reducer