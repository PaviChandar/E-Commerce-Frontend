import React, { useEffect, useState } from "react";
import "../../assets/css/home.css"
import { useNavigate } from "react-router-dom";
import GoToList from "../products/GoToList";
import OnSaleProduct from "../products/OnSaleProduct";
import LatestProduct from "../products/LatestProduct";

const Home = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        <div className="homeContainer">
            {isLoggedIn ?
                <>
                    <button className="logout" onClick={(e) => handleLogout(e)}>Logout</button>
                </> :
                <>
                    <button className="login">Login</button>
                </>
            }
            <div>
                <h1>On Sale Product</h1>
                <OnSaleProduct />
                <h1>Latest Products</h1>
                <LatestProduct />
                <GoToList />
            </div>
        </div>
    )
}

export default Home