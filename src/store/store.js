import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
// import reducer, { loginPerson } from '../components/home/UserSlice';
import cartReducer from "../reducer/cart-reducer";
import productReducer from "../reducer/product-reducer";
import userReducer from '../reducer/user-reducer';
// import reducer from '../components/home/UserSlice';

const middleWares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
    middleWares.push(logger);
}

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));

export const store = configureStore(
    {
        reducer: {
            // user: reducer,
            user: userReducer,
            product: productReducer,
            cart: cartReducer
        }
    }
);

