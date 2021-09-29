import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionCollections } from '../../redux/collection/collection.selector';
import CollectionPreview from './CollectionPreview';
const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherProps})  => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionCollections
})
export default connect(mapStateToProps)(CollectionOverview);