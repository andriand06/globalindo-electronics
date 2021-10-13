import React, {useEffect, useState} from 'react'
import CollectionItem from '../parts/CollectionItem';
import axios from 'axios';

const CollectionPage1 = ({match}) => {

    const [ collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchCollection = async () => {
            const data = await axios.get('/api/collections');
            const collections = await data.data.data.data;
            const collectiondata = await collections.filter(collection => collection.routename === match.params.collectionId);
            setCollection(collectiondata);
        }
        fetchCollection()
            .catch(console.error);
    },[]);
    return(
        collection.length > 0 && (
                <div className="collection-page">
                    <h2 className="title">{collection[0].title}</h2>
                    <div className="items">
                        {
                            collection[0].items.map(item => (
                                <CollectionItem key={item.id} item={item} />
                            ))
                        }
                    </div>  
                </div>
        )
    )
}

export default CollectionPage1;