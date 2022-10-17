import axios from "axios";
import * as types from './action-type'
import { baseUrl } from "../components/shared/Constant";
import { type } from "@testing-library/user-event/dist/type";

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

//Register User
export const registerUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/authenticate/register`, user)
            .then((res) => {
                dispatch(userRegistered)
                alert('User registered successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
}

//Login user
export const loginUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/authenticate/login`, user)
            .then((res) => {
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
                console.log("response : ", res.data)
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
            console.log("ressponse : ", res.data)
            console.log("category type: ", categoryType)
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

