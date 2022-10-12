import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css"

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="login">
            <div className="loginContainer">
                <input type="text" placeholder="username" className="username" />
                <input type="password" placeholder="password" className="password" />
                <button className="loginButton">Login</button>
                <h3>Not an user? Click register, to login</h3>
                <button className="loginButton" onClick={() => navigate('/register')} >Register</button>
            </div>
        </div>
    )
}

export default Login