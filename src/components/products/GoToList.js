import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/goToList.css"

const GoToList = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Shop by Brand</h1>
            <div className="brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiBH1hXIAdEkaQDI2a5YcvjdchnbmNHRTJQ&usqp=CAU" className="samsung" onClick={() => navigate('/samsung')} alt="img" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYXBJ1byIObo1u9zd930RAvHQNXjf4qX3bA&usqp=CAU" className="oppo" onClick={() => navigate('/oppo')} alt="img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XJ7KQrRNDdP8sMxBTKGqmvY_4uxmQgyBzQ&usqp=CAU" className="redmi" onClick={() => navigate('/redmi')} alt="img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-f34ou6yCaqzesHFU7M3AnDDvzEsUJySIgQ&usqp=CAU" className="vivo" onClick={() => navigate('/vivo')} alt="img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSDTmgM6ZQ78lPf_cgKjFM4zZ_-2NCOKM5g&usqp=CAU" className="oneplus" onClick={() => navigate('/oneplus')} alt="img" />
            </div>
        </div>
    )
}

export default GoToList