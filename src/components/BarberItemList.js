import React from "react"
import Carousel from "./Carousel"
import Item from "./Item"


export default function BarberItemList(){


    return(
        <>
            <Carousel />
            <div className="items">
                <div className="items-header">
                    <h1>Services and Contacts</h1>
                </div>
                <div className="items-lists">

                </div>
            </div>
        </>
    )
}