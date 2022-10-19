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
    }

    return (
        <>
            <Navbar />
            <div className="card" style={{ width: "18rem" }}>
                <div className='viewContainer'>
                    {product.image && product.image.map(image => {
                        return (
                            <img src={image} className="small-image" alt="img"></img>
                        )
                    })}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name : {product.name}<br />
                        Model : {product.model}</h5>
                    <p className="card-text">{product.description} </p>
                    <h3>{product.price}</h3>
                    <input className='card-text mb-2' value={quantity} min={0} type="number" onChange={(e) => setQuantity(e.target.value)} ></input>
                    <button href="#" className="btn btn-primary" onClick={(handleCart)} >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ViewProduct
