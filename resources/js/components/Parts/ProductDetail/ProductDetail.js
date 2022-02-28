import React, { Component} from 'react'
import axios from 'axios'
import Button from '../../Elements/Button';
import FormatNumber from '../../utils/FormatNumber';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.action'
import { ProductSection, ProductDescription, Image} from './ProductDetail.styles'
class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections : [],
            item :[]
        };
    }
    componentDidMount(){
        const fetchCollection = async () => {
            const data = await axios.get('/api/collections');
            const collection = await data.data.data.data;
            const collectionItem = collection.map(e => e.items.filter((item) => item.id == this.props.match.params.id));
            this.setState({ collections : collectionItem});
            this.setState({item : this.state.collections[0][0]})
            console.log(this.state.collections);
            console.log(this.state.item);
        }
        fetchCollection()
            .catch(console.error);
    } 
    render ()
    {
        const { collections, item } = this.state;
        const productId = this.props.match.params.id;
        return (
            collections.length > 0 && (
                <ProductSection>
                   
                    <Image style={{backgroundImage:`url(${item.image})`}} />
                    <ProductDescription>
                        <h3>{item.name}</h3>
                        <h5>Rp {FormatNumber(item.price)}</h5>
                        <p>{item.description}</p>
                        <label>Brand : {item.brand}</label>
                        <label>Tipe : {item.type}</label>
                        <p>Garansi : {item.garansi}</p>
                        <Button style={{width:'200px;'}} isBlock onClick={() => this.props.dispatch(addItem(item))}>Add To Cart</Button>
                    </ProductDescription>  
                </ProductSection>
            )
        )
    }
}

export default connect()(ProductDetail);
