import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})

export default rootReducer