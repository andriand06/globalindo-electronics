import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Elements/Button/index'
//todo list Header
//Cek user apakah sudah login / belum kalau belum login maka buat tampilan div right side menjadi dua tombol yaitu register dan login
//apabila user sudah login maka div rightside menjadi sebuah dropdown profile icon
//dropdown profile berisi setting profile, shopping cart, logout
const Header = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <header className="header">
            <div className="logo">
                <a href="#" className="clr-primary">Globalindo<span className="clr-blue">Electronics</span></a>
            </div>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <a href="#about">About</a>
                <Link to="/product">Product</Link>
                <a href="#contact">Contact Us</a>
            </div>
            {
                isLoggedIn ? (
                    <div className="right-side">
                        <a href=""></a>
                        <i className="gg-profile"></i>
                        <i className="gg-shopping-cart"></i>
                    </div>
                ) : (
                    
                    <div className="right-side">
                    <Link to="/login" className="login">Login</Link>
                    <Button type="link" href="/signup" className="primary-btn" isBlock hasShadow>Signup Now!</Button>
                </div>
                )
            }
           
        </header>
    );
}


export default Header;                                                                      