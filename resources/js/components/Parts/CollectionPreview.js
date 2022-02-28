import React from 'react'
import CollectionItem from '../parts/CollectionItem'
const CollectionPreview = ({ title, items, keyword})  => {
    if(keyword != "")
    {
        console.log(keyword);
        const regex = new RegExp(''+keyword+'','gi');
        return (
            <div className="collection-preview">
                <h1 className="title">{title}</h1>
                <div className="preview">
                    { 
                        items.filter((item, idx) => item.name.match(regex)).map(item => (
                            <CollectionItem key={item.id} item={item}/>
                        ))
                    }
                </div>      
            </div>
        )
    }
    else
    {
        return (
            <div className="collection-preview">
                <h1 className="title">{title}</h1>
                <div className="preview">
                    { 
                        items.filter((item, idx) => idx < 4).map(item => (
                            <CollectionItem key={item.id} item={item}/>
                        ))
                    }
                </div>      
            </div>
        )
    }
}
  



export default CollectionPreview;