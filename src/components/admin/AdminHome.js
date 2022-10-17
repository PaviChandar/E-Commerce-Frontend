import React, { useEffect, useState } from "react";
import "../../assets/css/adminHome.css"
import { useNavigate } from "react-router-dom";
import AvailableProducts from "./AvailableProducts";
import axios from "axios";
import { baseUrl } from "../shared/Constant";

const AdminHome = () => {
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        navigate('/login')
    }

    return (
        <div>
            <h1>Admin Home</h1>
            <button onClick={(e) => handleLogout(e)} className="adminLogout">Logout</button>
            <AvailableProducts />
            <button onClick={() => navigate('/admin/create/product')} className="addProduct">Add Product</button>
        </div>
    )
}

export default AdminHome