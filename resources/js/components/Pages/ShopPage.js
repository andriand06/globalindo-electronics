import React from 'react'
import CollectionOverview from '../Parts/CollectionOverview';
import CollectionPage from './CollectionPage';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import { Route } from 'react-router-dom'

const ShopPage = ({match}) => {
    return (
    <>  
    <Header />
    <div className="shop-page">
        <h1 className="clr-primary">Collections</h1>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} render={({match,history}) => <CollectionPage match={match} history={history}/> } />
    </div>
    <Footer />
    </>
    );
}
export default ShopPage;
