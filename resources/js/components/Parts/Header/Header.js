import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import Button from '../../Elements/Button/index'
import ShoppingCart from '../../Elements/ShoppingCart/index'
import CartDropdown from '../../Elements/ShoppingCartDropdown/index'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../../redux/user/user.selector'
import Hamburger from '../../../../../public/images/hamburger.svg'
import { HeaderContainer , LogoContainer, LogoText, OptionsContainer, OptionsLink, OptionsA, RightSide, ProfileDetail, DropdownIcon, DropdownMenu } from './Header.styles'
const Header = ({currentUser, hidden}) => {
  
    const displayDetails = () => {
        (document.getElementById("dropdown-profile").style.display == "block") ? document.getElementById("dropdown-profile").style.display = "none" : document.getElementById("dropdown-profile").style.display = "block";
        
    }
    const displayMenu = () => {
        (document.getElementById("dropdown-menu").style.display == "flex") ? document.getElementById("dropdown-menu").style.display = "none" : document.getElementById("dropdown-menu").style.display = "flex";
    }
   
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoText href="#">Globalindo Electronics</LogoText>
            </LogoContainer>
            <OptionsContainer>
                <OptionsLink to="/">Home</OptionsLink>
                <OptionsA href="#about">About</OptionsA>
                <OptionsLink to="/product">Product</OptionsLink>
                <OptionsA href="#contact">Contact Us</OptionsA>   
            </OptionsContainer>
          

            {
                currentUser ? (
                    <RightSide>
                        <i className="gg-profile" onClick={displayDetails} >
                        </i>
                        <ProfileDetail id="dropdown-profile">
                            <p>{currentUser.displayName}</p>
                            <p>{currentUser.email}</p>
                            <Link to="" onClick={() => auth.signOut()}>Sign Out</Link>
                        </ProfileDetail>
                        <ShoppingCart />
                        {
                            hidden ? null : <CartDropdown />
                        }
                    </RightSide>
                 
                ) : (
                    <RightSide>
                        <Link to="/signin" className="login">Login</Link>
                        <Button type="link" href="/signup" className="primary-button" isBlock hasShadow>Signup Now!</Button>
                    </RightSide>
               
                )
            }
            <DropdownIcon onClick={displayMenu}>
                <img src={Hamburger} alt="hamburger-icon" />
            </DropdownIcon>
            <DropdownMenu id="dropdown-menu">
            <Link to="/" style={{color:'black'}}>Home</Link>
                <a href="#about" style={{color:'black'}}>About</a>
                <Link to="/product" style={{color:'black'}}>Product</Link>
                <a href="#contact" style={{color:'black'}}>Contact Us</a>
            </DropdownMenu>
        </HeaderContainer>
        
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);                                                                         