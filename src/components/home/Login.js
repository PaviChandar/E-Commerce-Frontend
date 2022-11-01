import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../action/action";
import "../../assets/css/login.css"

const Login = () => {
    const [formError, setFormError] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user)


    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            if (sessionStorage.getItem('role') === 'true') {
                alert("Successfully logged in!")
                navigate('/admin')
            } else {
                alert("Successfully logged in!")
                navigate('/')
            }
        }
    },[success,user])

    const handleLogin = (e) => {
        setFormError(() => validate(credentials))
        setSubmit(true)
        dispatch({ type: "LOGIN_USER" })
    }

    useEffect(()=>{
         try {
            if (Object.keys(formError).length === 0 && submit) {               
                dispatch(loginUser(credentials))
                setSuccess(true)
            }
        } catch (err) {
            console.log("error : ", err)
        }
    },[submit])

    const validate = (value) => {
        const errors = {}

        if (!value.username) {
            errors.username = "*Username is required!"
        }
        if (!value.password) {
            errors.password = "*Password is required!"
        }
        return errors
    }

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginItem">
                    <input type="text" placeholder="username" className="username" id="username" onChange={handleChange} />
                    <span className="loginError">{formError.username}</span>
                </div>
                <div className="loginItem">
                    <input type="password" placeholder="password" className="password" id="password" onChange={handleChange} />
                    <span className="loginError">{formError.password}</span>
                </div>
                <button className="loginButton" onClick={(event)=>{handleLogin(event)}}>Login</button>
                <h3>Not an user? Click register, to login</h3>
                <button className="loginButton" onClick={() => navigate('/register')} >Register</button>
            </div>
        </div>
    )
}

export default Login