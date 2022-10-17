import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OnePlus = () => {
    const [productType, setProductType] = useState([])
    const { product } = useSelector((state) => state.product)

    const handleClick = () => {
        setProductType(product)
    }

    // useEffect(() => {
    //     console.log("in useffect")
    //     if (product)
    //         setProductType(product)
    // }, [product])

    return (

        <div>
            <h1>One Plus</h1>
            <button onClick={handleClick}>View Available Products</button>
            <div>
                {productType && productType.map(products => {
                    return (
                        <div>
                            <div><b>Name :</b> {products.name}</div>
                            <div><b>Model : </b>{products.model}</div>
                            <div><b>Description : </b>{products.description}</div>
                            <div><b>Price : </b> Rs.{products.price}</div>
                            <button>View Product details</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}



export default OnePlus