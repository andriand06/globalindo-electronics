import React from 'react'
import { CartItemContainer, ItemDetails } from './CartItem.styles';
const CartItem = ({item :{ image, price, name, quantity}}) => (
    
    <CartItemContainer>
        <img src={image} alt="item" style={{width:'30%'}} />
        <ItemDetails>
            <span style={{fontSize:'1rem'}}>{name}</span>
            <span>{quantity} x Rp.{price}</span>
        </ItemDetails>
    </CartItemContainer>
    
);

export default CartItem;