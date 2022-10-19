import { combineReducers } from "redux";
import cartReducer from "./cart-reducer";
import productReducer from "./product-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer
})

export default rootReducer