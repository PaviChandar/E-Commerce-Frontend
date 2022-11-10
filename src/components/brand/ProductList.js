import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductsToCart } from '../../action/action'
import jwtDecode from "jwt-decode";
import '../../assets/css/productList.module.css'
import Navbar from '../home/Navbar';

const ProductList = () => {
    const { products } = useSelector((state) => state.product)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let token

    if (sessionStorage.getItem("token")) {
        token = jwtDecode(sessionStorage.getItem("token"))
    }

    const handleCart = (product) => {
        dispatch(addProductsToCart(product, token.id))
        alert("Product added to cart")
    }

    return (
        <div className="container d-flex justify-content-center mt-50 mb-50">
            <Navbar />
            <div className="row">
                <div className="col-md-10">
                    {
                        products && products.map(product => {
                            return (                               
                                    <div className="card card-body">
                                        <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                            <div className="mr-2 mb-3 mb-lg-0">
                                                <img src={product.image[0]} alt="image" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="media-title font-weight-semibold">
                                                    <a href="#" data-abc="true">
                                                        <b> Name : {product.name}<br />
                                                            Model : {product.model}</b>
                                                    </a>
                                                </h6>
                                                <p className="mb-3">{product.description}</p>
                                            </div>
                                            <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                                <h3 className="mb-0 font-weight-semibold">INR {product.price}</h3>
                                                <button className="btn mt-4" onClick={() => handleCart(product)}>
                                                    <i className="icon-cart-add mr-2" /> Add to cart
                                                </button><br />
                                                <button className="btn mt-4" onClick={() => navigate(`/view-product/${product._id}`)}>
                                                    <i className="icon-cart-add mr-2" /> View Product
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                    <button style={{ width: "100px", height: "40px", marginLeft: "400px" }} className="btn mt-4" onClick={() => navigate('/')} >Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default ProductList
