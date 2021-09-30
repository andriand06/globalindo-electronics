import React from 'react'
import { connect } from 'react-redux';
import { selectCollectionUrlParam } from '../../redux/collection/collection.selector';
import CollectionItem from '../parts/CollectionItem';
import NotFound from '../Pages/NotFound'
const CollectionPage = ({ collection,match, history }) => {
    const { params } = match;
    const { collectionId } = params;
    console.log(collectionId);
        return (
            <div>
            {
           collection ? 
            (
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
            
            ) : (
                <NotFound history={history} />
            )
}
        </div>
        );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionUrlParam(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);