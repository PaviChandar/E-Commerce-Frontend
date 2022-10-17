import React, { useState, useEffect } from "react";
import "../../assets/css/newProduct.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, updateProduct } from "../../action/action";

const UpdateProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formError, setFormError] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const [credentials, setCredentials] = useState({
        name: '',
        model: '',
        description: '',
        price: ''
    })

    let { id } = useParams()
    const { product } = useSelector(state => state.product)

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }


    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])

    useEffect(() => {
        if (product) {
            console.log("product : ", product)
            setCredentials({ ...product })
        }
    }, [product])

    const handleUpdate = (e) => {
        e.preventDefault()
        setFormError(() => validate(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit){
            dispatch(updateProduct(id, credentials))
            setSuccess(true)
        }

    }

    useEffect(() => {
        if(success){
            alert("Product updated successfully!")
            navigate('/admin')
        }
    },[success])

    const validate = (value) => {
        const errors = {}

        if (!value.name) {
            errors.name = "*Product name is required"
        }
        if (!value.model) {
            errors.model = "*Model is required"
        }
        if (!value.description) {
            errors.description = "*Description is required"
        }
        if (!value.price) {
            errors.price = "*Price is required"
        }

        return errors
    }

    return (
        <div className="product">
            <h1>Update Product</h1>
            <div className="productContainer">
                <div>
                    <input type="text" name="name" value={credentials.name} placeholder="product name" onChange={(e) => handleChange(e)} />
                    <span className="error">{formError.name}</span>
                </div>
                <div>
                    <input type="text" name="model" value={credentials.model} placeholder="product model" onChange={(e) => handleChange(e)} />
                    <span className="error">{formError.model}</span>
                </div>
                <div>
                    <input type="text" name="description" value={credentials.description} placeholder="product description" onChange={(e) => handleChange(e)}  />
                    <span className="error">{formError.description}</span>
                </div>
                <div>
                    <input type="number" name="price" value={credentials.price} placeholder="price" min={0} onChange={(e) => handleChange(e)} />
                    <span className="error">{formError.price}</span>
                </div>
                <label>Category</label>
                <select name="category" disabled>
                    <option value="samsung">Samsung</option>
                    <option value="oneplus">OnePlus</option>
                    <option value="vivo">Vivo</option>
                    <option value="oppo">Oppo</option>
                    <option value="redmi">Redmi</option>
                </select>
                <div>
                    <button className="newproductButton" onClick={(e) => handleUpdate(e)}>Update</button>
                    <button className="backButton" onClick={() => navigate('/admin')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct