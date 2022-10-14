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