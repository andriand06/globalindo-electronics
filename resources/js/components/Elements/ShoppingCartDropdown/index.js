import React from 'react'
import CartItem from '../CartItem/index'
import Button from '../Button/index'
import { connect } from 'react-redux'
import { store } from '../../../redux/store'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { selectCartItems} from '../../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../../redux/cart/cart.action'
import "../ShoppingCartDropdown/index.scss"
const ShoppingCartDropdown = ({cartItems, history}) => (
    <div className="shopping-cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ):( 
                <span className="empty-message">Your cart is Empty</span>
                )
            }
        </div>
        <Button type="button" className="primary-button" isBlock onClick={() => { 
            history.push('/checkout');
            store.dispatch(toggleCartHidden());
        }
        }>Go To Checkout</Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(ShoppingCartDropdown));