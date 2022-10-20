import React, { useEffect, useState } from "react";
import "../../assets/css/home.css"
import GoToList from "../products/GoToList";
import OnSaleProduct from "../products/OnSaleProduct";
import LatestProduct from "../products/LatestProduct";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <div>
                <h1><i>Shoppers Stop</i></h1>
                <h2>On Sale Product</h2>
                <OnSaleProduct />
                <h2>Latest Products</h2>
                <LatestProduct />
                <GoToList />
            </div>
        </div>
    )
}

export default Home