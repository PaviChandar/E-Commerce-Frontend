import React, { useEffect } from 'react'
import { getMyCart, removeProductFromCart } from '../../action/action'
import jwtDecode from "jwt-decode";
import '../../assets/css/cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../home/Navbar';

const Cart = () => {

    let token
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cart } = useSelector(state => state.cart)

    if (sessionStorage.getItem("token")) {
        token = jwtDecode(sessionStorage.getItem("token"))
    }

    const getTotal = (item) => {
        var totalPrice = 0
        var totalQuantity = 0

        item.forEach(element => {
            totalPrice += element.quantity * element.productId.price
        });

        item.forEach(element => {
            totalQuantity += element.quantity 
            console.log("total quantity : ", totalQuantity)
        });

        return totalPrice
    }

    useEffect(() => {
        dispatch(getMyCart(token.id))
    }, [])

    const handleRemovecart = (id) => {
        dispatch(removeProductFromCart(id))
        alert("Product removed successfully!")
        navigate('/')
    }

    return (
        <>
            <div className="cart_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <Navbar />
                            <div className="cart_container">
                                <div className="cart_title" style={{ fontSize: "25px", textAlign: 'center' }}>
                                    <b>Shopping Cart <i>({cart.length} items in your cart) </i></b>
                                </div>
                                {
                                    cart && cart.map(item => {
                                        return (
                                            <div className="cart_items">
                                                <ul className="cart_list">
                                                    <li className="cart_item clearfix">
                                                        <div className="cart_item_image">
                                                            <img src={item.productId && item.productId.image[0]} alt="" />
                                                        </div>
                                                        <h2 className='cart_close' style={{ position: "relative", top: "-350px", right: "-50%" }}>
                                                            <strong onClick={() => handleRemovecart(item._id)} >X</strong></h2>
                                                        <div className=" d-flex flex-md-row flex-row justify-content-between">

                                                            <div className="cart_item_name cart_info_col">
                                                                <div className="cart_item_title" style={{ fontSize: "18px" }}><b>Name</b></div>
                                                                <div className="cart_item_text">{item.productId.name} {item.productId.model}</div>
                                                            </div>
                                                            <div className="cart_item_quantity cart_info_col">
                                                                <div className="cart_item_title" style={{ fontSize: "18px" }}><b>Quantity</b></div>
                                                                <div className="cart_item_text">{item.quantity}</div>
                                                            </div>
                                                            <div className="cart_item_price cart_info_col">
                                                                <div className="cart_item_title" style={{ fontSize: "18px" }}><b>Price</b></div>
                                                                <div className="cart_item_text">₹{item.productId.price}</div>
                                                            </div>
                                                            <div className="cart_item_total cart_info_col mb-10" >
                                                                <div className="cart_item_title" style={{ fontSize: "18px" }}><b>Total</b></div>
                                                                <div className="cart_item_text">₹{item.productId.price * item.quantity}</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                                <div className="order_total">
                                    <div className="order_total_content text-md-right">
                                        <div className="order_total_title" style={{ fontSize: "22px" }}><b>Order Total:</b></div>
                                        <div className="order_total_amount" style={{ fontSize: "20px" }}><b>₹{getTotal(cart)}</b></div>
                                    </div>
                                </div>
                                <button type="button" className="button button_cart" style={{ border: 'none', cursor: 'pointer', padding: '8px 10px', marginBottom: '20px' }}
                                    onClick={() => navigate('/')}> Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
