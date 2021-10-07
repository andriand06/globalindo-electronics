import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionCollections } from '../../redux/collection/collection.selector';
import CollectionPreview from './CollectionPreview';
const CollectionOverview = () => {
    const [collections, setCollections] = useState([]);

    useEffect( async () => {
        await axios.get('/api/collections')
                .then(res => {
                    setCollections(res.data.data.data)
                })
    },[])
    return (
        
        collections.length > 0 && (
            <div className="collections-overview">
                 {
            collections.map(({id, ...otherProps})  => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
            </div>
        )
);
    }

export default CollectionOverview;