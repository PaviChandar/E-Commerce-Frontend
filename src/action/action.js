import axios from "axios";
import * as types from './action-type'
import { baseUrl } from "../components/shared/Constant";

const userRegistered = () => ({
    type: types.REGISTER_USER
})

const userLoggedIn = (userDetail) => ({
    type: types.LOGIN_USER,
    payload: userDetail
})

const isAdmin = (isAdmin) => ({
    type: types.ISADMIN,
    payload: isAdmin
})

const addProduct = (productDetail) => ({
    type: types.ADD_PRODUCT,
    payload: productDetail
})

const getProducts = (productDetails) => ({
    type: types.GET_ALL_PRODUCTS,
    payload: productDetails
})

const removeProduct = (id) => ({
    type: types.DELETE_PRODUCT,
    payload: id
})

const singleProduct = (product) => ({
    type: types.GET_SINGLE_PRODUCT,
    payload: product
})

const upgradeProduct = () => ({
    type: types.UPDATE_PRODUCT
})

const getProductCategory = (productCategory) => ({
    type: types.GET_PRODUCT_BY_CATEGORY,
    payload: productCategory
})

const addToCart = () => ({
    type: types.ADD_TO_CART,
})

const updateQuantity = () => ({
    type: types.UPDATE_QUANTITY
})

const removeCart = () => ({
    type: types.REMOVE_PRODUCT_FROM_CART
})

const userCart = (cart) => ({
    type: types.USER_CART,
    payload: cart
})


export const registerUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/authenticate/register`, user)
            .then((res) => {
                dispatch(userRegistered)
                alert('User registered successfully')
            })
            .catch((err) => {
                console.log("error : ",err)
            })
    }
}

export const loginUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/authenticate/login`, user)
            .then((res) => {
                console.log("response for login : ", res.data)
                dispatch(userLoggedIn(res.data.details))
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('role', res.data.isAdmin)
                dispatch(isAdmin(res.data.isAdmin))
            })
            .catch(err => {
                console.log("error : ", err)
            })
    }
}

export const registerProduct = (product) => {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/product/`, product)
            .then((res) => {
                dispatch(addProduct())
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const updateProduct = (id, product) => {
    return function (dispatch) {
        axios
            .put(`${baseUrl}/product/${id}`, product)
            .then((res) => {
                dispatch(upgradeProduct())
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const getSingleProduct = (id) => {
    return function (dispatch) {
        axios
            .get(`${baseUrl}/product/find/${id}`)
            .then((res) => {
                dispatch(singleProduct(res.data))
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const getAllProducts = (allProducts) => {
    return function (dispatch) {
        axios
            .get(`${baseUrl}/product/`, allProducts)
            .then(() => {
                dispatch(getProducts())
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const getProductByCategory = (categoryType) => {
    return function (dispatch) {
        axios
            .get(`${baseUrl}/product/categoryType?category=${categoryType}`)
            .then((res) => {
                dispatch(getProductCategory(res.data))
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const deleteProduct = (id) => {
    return function (dispatch) {
        axios
            .delete(`${baseUrl}/product/${id}`)
            .then((res) => {
                dispatch(removeProduct())
            })
            .catch((err) => {
                console.log("error : ", err)
            })

    }
}

export const addProductsToCart = (product, userId, quantity = 1) => {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/cart`, { productId: product._id, userId: userId, quantity: quantity })
            .then((res) => {
                dispatch(addToCart())
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const updateCartQuantity = (productId, userId) => {
    return function (dispatch) {
        axios
            .put(`${baseUrl}/cart/${productId._id}/${userId}`)
            .then((res) => {
                dispatch(updateQuantity())
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const removeProductFromCart = (id) => {
    return function (dispatch) {
        axios
            .delete(`${baseUrl}/cart/${id}`)
            .then((res) => {
                dispatch(removeCart())
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
}

export const getMyCart = (id) => {
    return function (dispatch) {
        axios
            .get(`${baseUrl}/cart/${id}`)
            .then(res => {
                dispatch(userCart(res.data))
            })
            .catch(err => {
                console.log("error : ", err)
            })
    }
}

