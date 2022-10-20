import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { cart } = useSelector((state) => (state.cart))
    console.log("Cart details : ", cart)
    // console.log("Cart quantity :", cart[0].quantity)

    // const getTotalQuantity = (qua) => {
    //     var totalQuantity = 0
        
    //     qua.forEach(ele => {
    //         totalQuantity += ele.quantity
    //     })
    //         } 

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setIsLoggedIn(true)
        }
    })

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
                    <button className="logout" onClick={(e) => handleLogout(e)}>Logout</button>
                    <button className="cart" onClick={() => navigate('/cart')}>Cart 
                    ({cart.length} items) 
                   {/* { getTotalQuantity(cart)} */}
                    in cart</button>
                </> :
                <>
                    <button className="login">Login</button>
                </>
            }
        </div>
    )
}

export default Navbar