import React from 'react'
import Button from '../Elements/Button/index'
import HeroImage from '../../../../public/images/macpro.jpg'
const Hero = () => {
    return(
        <section className="container">
            <div className="hero mt-5 align-items-center">
                <div className="hero-info">
                    <div className="hero-text">
                        <h2><span className="clr-blue">An Exciting Place <br /></span> for the whole family to shop.</h2>
                        <label htmlFor="" className="text-gray-500">Our best Product within this years, ready to comfort your daily.</label>
                    </div>
                    <Button type="link" href="/shop" hasShadow className="primary-btn">Shop Now</Button>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Mac Pro" className="hero-product" />
                </div>
            </div>
        </section>
    )
}

export default Hero;