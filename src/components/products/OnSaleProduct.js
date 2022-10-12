import React, { useState } from "react";
import "../../assets/css/onSaleProduct.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const OnSaleProduct = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    const photos = [
                "https://m.media-amazon.com/images/I/71HUnJvHsbL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/71JT7AirReL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/61ahn9N38zL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/616FcX9aiEL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/71Yxd73ba9L._AC_UY218_.jpg"
            ]
    const length = photos.length

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "left") {
            newSlideNumber = slideNumber === 0 ? length - 1 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === length - 1 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };

    return (
        <div className="slider">
            <FontAwesomeIcon icon={faCircleArrowLeft} className="left-arrow" onClick={() => handleMove("left")} />
            <FontAwesomeIcon icon={faCircleArrowRight} className="right-arrow" onClick={() => handleMove("right")} />
            {photos?.map((slide, index) => {
                return (
                    <div className={index === slideNumber ? 'slide active' : 'slide'} key={index} >
                        {index === slideNumber && (
                            <img src={photos[slideNumber]} alt="samsung" className="image" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}



export default OnSaleProduct