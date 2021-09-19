import React from 'react'
import CollectionItem from '../parts/CollectionItem'
const CollectionPreview = ({ title, items})  => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
               items.filter((item, idx) => idx < 4).map(({id, ...otherProps }) => (
                    <CollectionItem key={id} {...otherProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;