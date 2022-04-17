import React from 'react'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Carousel(){


    return(
                <header
                    className="carousel"
                    >
                    <div className="carousel__contents">
                        <h1 className="carousel__title">
                        MobileCutz 
                        </h1>
                    </div>
                    <div className='icon-box'>
                        <FontAwesomeIcon icon = {faAngleLeft} className = "angle-left" />
                        <FontAwesomeIcon icon = {faAngleRight} className = "angle-right" />
                    </div>
                    <div className="carousel__fadeBottom" />
                </header>
    )
}