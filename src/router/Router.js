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
import AdminOutlet from "../components/admin/AdminOutlet";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {

    ValidateSession()

    let url = window.location.href
    const navigate = useNavigate()

    const {isAdmin} = useSelector(state => state.user)
    console.log("Admin : ", isAdmin);

    // useEffect(() => {
    //     if (sessionStorage.getItem('role') === 'true' && url.indexOf('/')) {
    //         navigate('/admin')
    //     } else if (sessionStorage.getItem('role') === 'false' && url.indexOf('/admin')) {
    //         navigate('/')
    //     }
    // }, [])

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />


                <Route path='/' element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                } />
                <Route path='/product-list' element={
                    <ProtectedRoutes>
                        <ProductList />
                    </ProtectedRoutes>
                } />
                <Route path='/view-product/:id' element={
                    <ProtectedRoutes>
                        <ViewProduct />
                    </ProtectedRoutes>
                } />
                <Route path='/cart' element={
                    <ProtectedRoutes>
                        <Cart />
                    </ProtectedRoutes>
                } />


                <Route path='/admin' element={
                    <PrivateRoutes>
                        <AdminOutlet />
                    </PrivateRoutes>
                }>
                    <Route path='' element={
                        <PrivateRoutes>
                            <AdminHome />
                        </PrivateRoutes>} />
                    <Route path='create/product' element={
                        <PrivateRoutes>
                            <NewProduct />
                        </PrivateRoutes>
                    } />
                    <Route path='update/:id' element={
                        <PrivateRoutes>
                            <UpdateProduct />
                        </PrivateRoutes>
                    } />
                </Route>
            </Routes>
        </>

    )
}

export default Router