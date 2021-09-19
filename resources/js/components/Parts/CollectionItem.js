import React from 'react'
import FormatNumber from '../utils/FormatNumber'
const CollectionItem = ({key,name,imageUrl,price}) => (
    <div key={key} className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">Rp {FormatNumber(price)}</span>    
        </div>   
    </div>
);

export default CollectionItem;