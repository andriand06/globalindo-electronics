import React from 'react'
import Button from '../Button/index'
import "../ShoppingCartDropdown/index.scss"
const ShoppingCartDropdown = () => (
    <div className="shopping-cart-dropdown">
        <div className="cart-items"/>
        <Button type="button" className="primary-btn" isBlock>Go To Checkout</Button>
    </div>
);

export default ShoppingCartDropdown;