import React from "react";
import { Route, Routes } from "react-router-dom";
import Samsung from "../components/brand/Samsung";
import OnePlus from "../components/brand/OnePlus";
import Oppo from "../components/brand/Oppo";
import Redmi from "../components/brand/Redmi";
import Vivo from "../components/brand/Vivo";
import Home from "../components/home/Home";
import AdminHome from "../components/admin/AdminHome";
import Login from "../components/home/Login";
import Register from "../components/home/Register";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/samsung' element={<Samsung />} />
                <Route path='/oppo' element={<Oppo />} />
                <Route path='/oneplus' element={<OnePlus />} />
                <Route path='/redmi' element={<Redmi />} />
                <Route path='/vivo' element={<Vivo />} />

                <Route path='/admin' element={<AdminHome />} />
            </Routes>
        </>
    )
}

export default Router