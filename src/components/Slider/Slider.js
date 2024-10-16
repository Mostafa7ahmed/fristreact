import React, { useState } from 'react'
import banner from "../../assents/images/banner.jpeg"

function Slider() {

    // const [first, setfirst] = useState([
    //     "../../assents/images/banner.jpeg",
    //     "../../assents/images/banner.jpeg",
    //     "../../assents/images/banner.jpeg"
    // ])
    // console.log(first[0])
    return (
 

        <div id="carouselExampleIndicators" className="carousel slide">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
                <div className="carousel-item active h-75">
                    <img src={banner} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src={banner} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src={banner} className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider