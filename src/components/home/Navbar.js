import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "../../assets/css/navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { cart } = useSelector((state) => (state.cart))

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setIsLoggedIn(true)
        }
    })

    let token

    if (sessionStorage.getItem("token")) {
        token = jwtDecode(sessionStorage.getItem("token"))
    }

    const handleLogout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <div>
            {isLoggedIn ?
                <>
                    <h4 className="h4tag">Hello, {token.name}!</h4>
                    <button className="logout" onClick={(e) => handleLogout(e)}>Logout</button>
                    <button className="cart" onClick={() => navigate('/cart')}>Cart ({cart.length} items) in cart</button>
                </> :
                <>
                    <button className="login">Login</button>
                </>
            }
        </div>
    )
}

export default Navbar