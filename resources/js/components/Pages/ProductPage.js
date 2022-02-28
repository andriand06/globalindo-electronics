import React from 'react'
import Header from '../Parts/Header/Header';
import Footer from '../Parts/Footer';
import ProductMenu from '../Parts/ProductMenu/ProductMenu'
import ProductDetail from '../Parts/ProductDetail/ProductDetail';
import { Route } from 'react-router-dom';
const ProductPage = ({match}) => {
    return(
        <>
            <Header />
            <Route exact path={`${match.path}`} component={ProductMenu}/>
            <Route exact path={`${match.path}/:id`} render={({match}) => <ProductDetail match={match} />} />
            <Footer />
        </>
    );
}

export default ProductPage;