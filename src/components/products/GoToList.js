import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByCategory, getSingleProduct } from "../../action/action";
import "../../assets/css/goToList.css"

const GoToList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [oneplus, setOneplus] = useState("oneplus")
    const [samsung, setSamsung] = useState("Samsung")
    const [vivo, setVivo] = useState("vivo")
    const [oppo, setOppo] = useState("oppo")
    const [redmi, setRedmi] = useState("redmi")

    const handleOneplus = (e) => {
        e.preventDefault()
        dispatch(getProductByCategory(oneplus))
        navigate('/product-list')
    }

    const handleSamsung = (e) => {
        e.preventDefault()
        dispatch(getProductByCategory(samsung))
        navigate('/product-list')
    }

    const handleOppo = (e) => {
        e.preventDefault()
        dispatch(getProductByCategory(oppo))
        navigate('/product-list')
    }

    const handleRedmi = (e) => {
        e.preventDefault()
        dispatch(getProductByCategory(redmi))
        navigate('/product-list')
    }

    const handleVivo = (e) => {
        e.preventDefault()
        dispatch(getProductByCategory(vivo))
        navigate('/product-list')
    }

    return (
        <div>
            <h2>Shop by Brand</h2>
            <div className="brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiBH1hXIAdEkaQDI2a5YcvjdchnbmNHRTJQ&usqp=CAU" className="samsung" onClick={(e) => handleSamsung(e)} alt="img" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYXBJ1byIObo1u9zd930RAvHQNXjf4qX3bA&usqp=CAU" className="oppo" onClick={(e) => handleOppo(e)} alt="img" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XJ7KQrRNDdP8sMxBTKGqmvY_4uxmQgyBzQ&usqp=CAU" className="redmi" onClick={(e) => handleRedmi(e)} alt="img" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-f34ou6yCaqzesHFU7M3AnDDvzEsUJySIgQ&usqp=CAU" className="vivo" onClick={(e) => handleVivo(e)} alt="img" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSDTmgM6ZQ78lPf_cgKjFM4zZ_-2NCOKM5g&usqp=CAU" className="oneplus" onClick={(e) => handleOneplus(e)} alt="img" />
            </div>
        </div>
    )
}

export default GoToList