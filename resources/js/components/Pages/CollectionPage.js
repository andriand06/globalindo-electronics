import React, {useEffect, useState} from 'react'
import CollectionItem from '../parts/CollectionItem';
import axios from 'axios';

const CollectionPage = ({match}) => {

    const [ collection, setCollection] = useState([]);
 
    useEffect(() => {
        const fetchCollection = async () => {
            const data = await axios.get('/api/collections');
            const collections = await data.data.data.data;
            setCollection(collections.find(e => e.routename === match.params.collectionId));
        }
        fetchCollection()
            .catch(console.error);
    },[]);
    console.log(collection);   

    return(
            collection.length > 0 && (
                <div className="collection-page">
                    <h2 className="title">{collection.title}</h2>
                    <div className="items">
                        {
                            collection.items.map(item => (
                                <CollectionItem key={item.id} item={item} />
                            ))
                        }
                    </div>  
                </div>
            )
    )
}

export default CollectionPage;