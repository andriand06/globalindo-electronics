import React from 'react'
import Miyako from '../../../../public/images/Miyako.svg'
import Cosmos  from '../../../../public/images/Cosmos.svg'
import Maspion  from '../../../../public/images/Maspion.svg'
import Panasonic  from '../../../../public/images/Panasonic.svg'
import Polytron  from '../../../../public/images/Polytron.svg'
import Asus  from '../../../../public/images/ASUS.svg'
import Acer  from '../../../../public/images/acer.svg'
import Lenovo  from '../../../../public/images/lenovo.svg'

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