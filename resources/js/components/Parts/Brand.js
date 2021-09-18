import React from 'react'
import Miyako from '../../../../public/images/miyako.jpg'
import Cosmos from '../../../../public/images/cosmos.png'
import Maspion from '../../../../public/images/maspion.png'
import Panasonic from '../../../../public/images/panasonic.png'
import Polytron from '../../../../public/images/polytron.png'
import Asus from '../../../../public/images/asus.png'
import Acer from '../../../../public/images/acer.png'
import Lenovo from '../../../../public/images/lenovo.png'

const Brand = () => {
    return (
        <section className="container">
            <div className="brands">
                <div className="brand-item">
                    <img src={Miyako} alt="miyako" />
                </div>
                <div className="brand-item">
                    <img src={Cosmos} alt="Cosmos" />
                </div>
                <div className="brand-item">
                    <img src={Maspion} alt="Maspion" />
                </div>
                <div className="brand-item">
                    <img src={Panasonic} alt="Panasonic" />
                </div>
                <div className="brand-item">
                    <img src={Polytron} alt="Polytron" />
                </div>
                <div className="brand-item">
                    <img src={Acer} alt="Acer" />
                </div>
                <div className="brand-item">
                    <img src={Asus} alt="Asus" />
                </div>
                <div className="brand-item">
                    <img src={Lenovo} alt="Lenovo" />
                </div>
            </div>
        </section>
    );
}

export default Brand;