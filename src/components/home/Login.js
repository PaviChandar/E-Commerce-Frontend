import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../action/action";
import "../../assets/css/login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }


    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            if (sessionStorage.getItem('role') === 'true') {
                navigate('/admin')
            } else {
                navigate('/')
            }
        }
    })

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            dispatch(loginUser(credentials))
        } catch (err) {
            console.log("error : ", err)
        }
    }

    return (
        <div className="login">
            <div className="loginContainer">
                <input type="text" placeholder="username" className="username" id="username" onChange={handleChange} />
                <input type="password" placeholder="password" className="password" id="password" onChange={handleChange} />
                <button className="loginButton" onClick={handleLogin}>Login</button>
                <h3>Not an user? Click register, to login</h3>
                <button className="loginButton" onClick={() => navigate('/register')} >Register</button>
            </div>
        </div>
    )
}

export default Login