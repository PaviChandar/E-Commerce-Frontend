import * as types from '../action/action-type'

const initialState = {
    product: {},
    products: [],
    loading: true,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state,
                loading: false
            }
        case types.UPDATE_PRODUCT:
            return{
                ...state,
                product: action.payload,
                loading: false
            }
        case types.DELETE_PRODUCT:
            return{
                ...state,
                loading:true
            }
        case types.GET_SINGLE_PRODUCT:
            return{
                ...state,
                product: action.payload,
                loading: false
            }
        case types.GET_PRODUCT_BY_CATEGORY:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default productReducer