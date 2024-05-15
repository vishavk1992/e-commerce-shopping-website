import "../CSS/banner.css"
import React from 'react'
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <section className="banner-block">
            <div className='banner-slide'>
                <img src="images/banner/slide1.jpg" alt="slide iamge"/>
                <div className='banner-layer'>
                    <div className='info-col'>
                        <h2>Winter Fashion Trends</h2>                 
                        <h3>Get up to 30% off</h3>                   
                        <h4>On Jackets</h4>                   
                        <h5>STARTING At $199</h5>
                        </div>                   
                    <div className='info-btn'>
                        <Link to ="/categories"><button className="btn">SHOP NOW</button></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner