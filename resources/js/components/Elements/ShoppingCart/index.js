import React from 'react'
import Cart from '../../../../../public/images/shopping-bag.svg'
import "../ShoppingCart/index.scss"

import { connect } from 'react-redux'
import  { toggleCartHidden }  from '../../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'
const ShoppingCart = ({toggleCartHidden, itemCount}) => (
    <div className="shopping-cart" onClick={toggleCartHidden}>
        <img src={Cart} alt="shopping-cart" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)

    //mapStateToProps will be keep firing if other state getting called(example currentUser) because reducer dont know that the value we might get is still the same.
    // to handle this use reselect which as we mentioned in the previous video, will allow us to memoize and not re-render a component if the state value does not change. 
})
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);