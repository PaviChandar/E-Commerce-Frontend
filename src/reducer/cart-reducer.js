import * as types from '../action/action-type'

const initialState = {
    cart: [],
    loading: true,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_CART:
            return{
                ...state,
                cart: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default cartReducer