import React from 'react'
import Button from '../Elements/Button/index'
import FormatNumber from '../utils/FormatNumber'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action'
const CollectionItem = ({ key,item, addItem}) => {
    const { name, price, image } = item;
    
    return (
    <div key={key} className="collection-item">
        <a href={`/product/${item.id}`}>
        <div className="image" style={{ backgroundImage: `url(${image})`}}/>
        <div className="collection-footer">
            <span className="name" id={name}>{name}</span>
            <span className="price">Rp {FormatNumber(price)}</span>    
        </div>
        <Button className="cart-btn" isBlock onClick={() => addItem(item)}>Add To Cart</Button>
        </a>
    </div>
    );
}; 
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);