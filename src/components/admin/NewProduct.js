import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerProduct } from "../../action/action";
import "../../assets/css/newProduct.module.css"

const NewProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formError, setFormError] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const [credentials, setCredentials] = useState({
        name: '',
        model: '',
        description: '',
        price: '',
        category: '',
        image: ''
    })

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    const handleCreate = (e) => {
        e.preventDefault()
        setFormError(() => validate(credentials))
        setSubmit(true)
        if (Object.keys(formError).length === 0 && submit) {
            dispatch(registerProduct(credentials))
            setSuccess(true)
        }
    }

    useEffect(() => {
        if (success) {
            alert("Product created successfully")
            navigate('/admin')
        }
    }, [success])

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
        if (!value.image) {
            errors.image = "*Image is required"
        }

        return errors
    }

    return (
        <div className="product">
            <h1> Add New Product</h1>
            <div className="productContainer">
                <div>
                    <input type="text" name="name" placeholder="product name" onChange={(e) => handleChange(e)} value={credentials.name} />
                    <span className="error">{formError.name}</span>
                </div>
                <div>
                    <input type="text" name="model" placeholder="product model" onChange={(e) => handleChange(e)} value={credentials.model} />
                    <span className="error">{formError.model}</span>
                </div>
                <div>
                    <input type="text" name="description" placeholder="product description" onChange={(e) => handleChange(e)} value={credentials.description} />
                    <span className="error">{formError.description}</span>
                </div>
                <div>
                    <input type="number" name="price" placeholder="price" min={0} onChange={(e) => handleChange(e)} value={credentials.price} />
                    <span className="error">{formError.price}</span>
                </div>
                <div>
                    <input type="text" name="image" placeholder="image URL" onChange={(e) => handleChange(e)} value={credentials.image} />
                    <span className="error">{formError.image}</span>
                </div>
                <label>Category</label>
                <select name="category" onChange={(e) => handleChange(e)} >
                    <option>Select</option>
                    <option value="samsung">Samsung</option>
                    <option value="oneplus">OnePlus</option>
                    <option value="vivo">Vivo</option>
                    <option value="oppo">Oppo</option>
                    <option value="redmi">Redmi</option>
                </select>
                <div>
                    <button className="newproductButton" onClick={(e) => handleCreate(e)} >Create</button>
                    <button className="backButton" onClick={() => navigate('/admin')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default NewProduct;