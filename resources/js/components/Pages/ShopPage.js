import React, {useState} from 'react'
import CollectionOverview from '../Parts/CollectionOverview';
import CollectionPage from './CollectionPage';
import Header from '../Parts/Header/Header';
import Footer from '../Parts/Footer';
import { Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopPage = ({match}) => {
    const [keyword, setKeyword] = useState("");
    const [searchParam] = useState(["name"]);

    const searchItems = () => {
        let keyword = $("#keyword").value.toLowerCase();
 
     }
    return (
    <>  
    <Header />
    <div className="shop-page">
        <h1 className="clr-primary">Collections</h1>
        <div>   
        <input id="keyword" name="keyword" type="text" placeholder="Masukkan Kata Pencarian"  onChange={(e) => setKeyword(e.target.value)}></input>
        </div>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverview {...props} keyword={keyword}/>}/>
        <Route exact path={`${match.path}/:collectionId`} render={({match,history}) => <CollectionPage match={match} history={history} keyword={keyword}/> } />
    </div>
    <Footer />
    </>
    );
}
export default ShopPage;
