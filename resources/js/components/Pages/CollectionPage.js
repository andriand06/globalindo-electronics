import React, { Component } from 'react'
import axios from 'axios'
import CollectionItem from '../parts/CollectionItem';

class CollectionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collection : []
        };
    }
    componentDidMount(){
        const fetchCollection = async () => {
            const data = await axios.get('/api/collections');
            const collections = await data.data.data.data;
            const collectiondata = await collections.filter(e => e.routename === this.props.match.params.collectionId);
            this.setState({ collection : collectiondata});
        }
        fetchCollection()
            .catch(console.error);
    } 
    render()
    {
        const { collection } = this.state;
        return (
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
}
export default CollectionPage;