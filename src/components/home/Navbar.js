import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "../../assets/css/navbar.css"
import { getMyCart } from "../../action/action";

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { cart } = useSelector((state) => (state.cart))

    useEffect(() => {
        dispatch(getMyCart(token.id))
        if (sessionStorage.getItem('token')) {
            setIsLoggedIn(true)
        }
    }, [cart])

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