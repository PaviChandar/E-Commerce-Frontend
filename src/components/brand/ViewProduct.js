import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProductsToCart, getSingleProduct } from '../../action/action'
import jwtDecode from "jwt-decode";
import '../../assets/css/viewProduct.module.css'
import Navbar from '../home/Navbar';

const ViewProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const { product } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    let { id } = useParams()

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])

    let token

    if (sessionStorage.getItem("token")) {
        token = jwtDecode(sessionStorage.getItem("token"))
    }

    const handleCart = () => {
        dispatch(addProductsToCart(product, token.id, quantity))
        alert("Product added to cart")
    }

    return (
        <>
            <Navbar />
            <div className="card">
                <div className='viewContainer'>
                    {product.image && product.image.map(image => {
                        return (
                            <img src={image} className="small-image" alt="img"></img>
                        )
                    })}
                </div>
                <div className="viewProductContainer">
                    <h5 className="viewTitle"><b>Name : </b>{product.name}<br />
                        <b> Model :</b> {product.model}</h5>
                    <p className="viewText">{product.description} </p>
                    <h3 className="viewPrice">Rs. {product.price}</h3>
                    <input className="viewQuantity" value={quantity} min={0} type="number" onChange={(e) => setQuantity(e.target.value)} />
                    <button href="#" className="btn" style = {{marginLeft: "30px"}} onClick={(handleCart)} >Add to cart </button>
                </div>
            </div>
        </>
    )
}

export default ViewProduct
