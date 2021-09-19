import React from 'react'
import SHOP_DATA from '../data/shop.data'
import CollectionPreview from './CollectionPreview'

class Shop extends React.Component  {
    constructor(props){
        super(props);

        this.state  ={
            collections : SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
                <div className="shop-page">
                    <h1 className="clr-primary">Collections</h1>
                    {
                        collections.map(({id, ...otherProps})  => (
                            <CollectionPreview key={id} {...otherProps} />
                        ))
                    }
                </div>
        )
    }
}


export default Shop;