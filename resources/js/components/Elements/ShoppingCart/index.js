import React from 'react'
import Cart from '../../../../../public/images/shopping-bag.svg'
import "../ShoppingCart/index.scss"

import { connect } from 'react-redux'
import  toggleCartHidden  from '../../../redux/cart/cart.action'

const ShoppingCart = ({toggleCartHidden}) => (
    <div className="shopping-cart" onClick={toggleCartHidden}>
        <img src={Cart} alt="shopping-cart" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null,mapDispatchToProps)(ShoppingCart);