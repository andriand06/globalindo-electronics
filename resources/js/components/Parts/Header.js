import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase.utils'
import Button from '../Elements/Button/index'
import ShoppingCart from '../Elements/ShoppingCart/index'
import CartDropdown from '../Elements/ShoppingCartDropdown/index'
//todo list Header
//Cek user apakah sudah login / belum kalau belum login maka buat tampilan div right side menjadi dua tombol yaitu register dan login
//apabila user sudah login maka div rightside menjadi sebuah dropdown profile icon
//dropdown profile berisi setting profile, shopping cart, logout
const Header = ({currentUser, hidden}) => {
    const displayDetails = () => {
        document.getElementById("dropdown-profile").classList.toggle("show");
    }
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
                currentUser ? (
                    <div className="right-side">
                        <i className="gg-profile" onClick={displayDetails} >
                        </i>
                        <div className="profile-detail" id="dropdown-profile">
                                <p>{currentUser.displayName}</p>
                                <p>{currentUser.email}</p>
                                <Link to="" onClick={() => auth.signOut()}>Sign Out</Link>
                        </div>
                        <ShoppingCart />
                        {
                            hidden ? null : <CartDropdown />
                        }
                        
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

const mapStateToProps = ({user: {currentUser}, cart:{hidden} }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);                                                                         