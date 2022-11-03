import React, { useEffect, useState } from "react";
import "../../assets/css/availableProducts.css"
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../action/action";
import { Table, Space } from "antd";
import axios from "axios";
import { baseUrl } from "../shared/Constant";
import { useNavigate } from "react-router-dom";

const AvailableProducts = () => {
    const [products, setProducts] = useState([])
    const [success, setSuccess] = useState(false)
    const [productSource, setProductSource] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
        if(window.confirm("Are you sure you want to delete the product?")){
            setSuccess(true)
        }
    }

    const handleUpdate = (id) => {
        navigate(`/admin/update/${id}`)
    }

    useEffect(() => {
        if(success){
            alert("Product deleted successfully!")
        }
    },[success])

    useEffect(() => {
        axios
        .get(`${baseUrl}/product/`)
        .then((data) => {
            setProducts(() => (data.data))
        })
        .catch((err) => {
            console.log("error : ", err)
        })
    }, [success])

    useEffect(() => {
        const dataSource = products.map((e) => {
            return ({
                "Product_ID" : e._id,
                "Product Name": e.name,
                "Product Model":e.model,
                "Description": e.description,
                "Price": e.price,
                "Category": e.category,
            })
        })
        setProductSource(dataSource)
    }, [products])


    const column = [
        {
            title: 'Product Name',
            dataIndex: 'Product Name',
            key: 'Product Name',
        },
        {
            title: 'Product Model',
            dataIndex: 'Product Model',
            key: 'Product Model',
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            key: 'Category',
        },
        {
            title: 'Action',
            key: 'Action',
            render: (_, data) => (
                <Space size="middle">
                    <button onClick={() => handleUpdate(data.Product_ID)} className="action">Update</button>
                    <button onClick={() => handleDelete(data.Product_ID)} className="action" >Delete</button>
                </Space>
            )
        },
    ]

    return (
        <div>
           <h2>Available Mobiles</h2>
           {
            products.length ?  products.length===0 ? <h5>No Products Found</h5>:<Table columns={column} dataSource={productSource} />:<h3>Loading...</h3>
           }
        </div>
    )
}

export default AvailableProducts