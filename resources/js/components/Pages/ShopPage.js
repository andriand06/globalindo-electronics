import React from 'react'
import CollectionOverview from '../Parts/CollectionOverview';
import CollectionPage from './CollectionPage';
import NotFound from './NotFound'
import { Route } from 'react-router-dom'

const ShopPage = ({match}) => {
    console.log(match.params);
    return(   
    <div className="shop-page">
        <h1 className="clr-primary">Collections</h1>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} render={({match,history}) => <CollectionPage match={match} history={history}/> } />
    </div>
);
}
export default ShopPage;
