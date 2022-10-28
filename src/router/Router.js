import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/home/Home";
import AdminHome from "../components/admin/AdminHome";
import Login from "../components/home/Login";
import Register from "../components/home/Register";
import ValidateSession from "../components/shared/ValidateSession";
import NewProduct from "../components/admin/NewProduct";
import UpdateProduct from "../components/admin/UpdateProduct";
import ViewProduct from "../components/brand/ViewProduct";
import ProductList from "../components/brand/ProductList";
import Cart from "../components/cart/Cart";

const Router = () => {

    ValidateSession()

    let url = window.location.href
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem('role') === 'true' && url.indexOf('/')) {
            navigate('/admin')
        } else if (sessionStorage.getItem('role') === 'false' && url.indexOf('/admin')) {
            navigate('/')
        }
    }, [])


    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/product-list' element={<ProductList />} />
                <Route path='/view-product/:id' element={<ViewProduct />} />
                <Route path="/cart" element={<Cart />} />

                <Route path='/admin' element={<AdminHome />} >
                    {/* <Route path='create/product' element={<NewProduct />} />
                    <Route path='update/:id' element={<UpdateProduct />} /> */}
                </Route>
                <Route path='/admin/create/product' element={<NewProduct />} />
                <Route path='/admin/update/:id' element={<UpdateProduct />} />
            </Routes>
        </>
    )
}

export default Router