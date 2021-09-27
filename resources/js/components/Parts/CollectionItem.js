import React from 'react'
import Button from '../Elements/Button/index'
import FormatNumber from '../utils/FormatNumber'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action'
const CollectionItem = ({ key,item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
    <div key={key} className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">Rp {FormatNumber(price)}</span>    
        </div>
        <Button className="cart-btn" isBlock onClick={() => addItem(item)}>Add To Cart</Button>
    </div>
    );
}; 
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);