import React from 'react'
import Button from '../Elements/Button/index'
import FormatNumber from '../utils/FormatNumber'
const CollectionItem = ({key,name,imageUrl,price}) => (
    <div key={key} className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">Rp {FormatNumber(price)}</span>    
        </div>
        <Button className="cart-btn" isBlock>Add To Cart</Button>
    </div>
); 

export default CollectionItem;