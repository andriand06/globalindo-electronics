import React from 'react'
import CartItem from '../CartItem/index'
import Button from '../Button/index'
import { connect } from 'react-redux'
import { selectCartItems} from '../../../redux/cart/cart.selectors'
import "../ShoppingCartDropdown/index.scss"
const ShoppingCartDropdown = ({cartItems}) => (
    <div className="shopping-cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <Button type="button" className="primary-btn" isBlock>Go To Checkout</Button>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(ShoppingCartDropdown);