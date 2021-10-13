import React from 'react';
import Payment from '../../../../public/images/payment.png';

const Footer = () => {
    return (
        <section className="container">
        <footer className="footer">
            <div className="address">
                <label htmlFor="">Address</label>
                <p className="text-gray-500">Jl.Sentot Ali Basa RT.11 No.1, Payo Selincah, Jambi Timur, Kota Jambi, 36135</p>                
            </div>
            <div className="explore">
                <ul>
                    <p>Explore Us</p>
                    <li><a href="/career">Our Careers</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/termconditions">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="getintouch">
                <ul>
                    <p>Get in Touch</p>
                    <li>globalindo@gmail.com</li>
                    <li><a href="https://api.whatsapp.com/send/?phone=+6281363883325">+62 813 6388 3325</a></li>
                </ul>
            </div>
            <div className="support">
                <p>We Support</p>
                <img src={Payment} alt="card-payments" />
            </div>
        </footer>
            <p className="text-center">Copyright 2022 • Globalindo Electronics & Computers</p>
        </section>
    );
}

export default Footer;