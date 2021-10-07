import React, {useState} from 'react'
import { connect } from 'react-redux';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Input from '../Elements/Input/index'
import Button from '../Elements/Button/index'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../Parts/CheckoutItem/index';
import FormatNumber from '../utils/FormatNumber'
import axios from 'axios';
const CheckoutPage = ({cartItems,total,history}) => {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [_total, setTotal] = useState(total);
    const [_status, setStatus] = useState('PENDING');
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            total : _total,
            status : _status,
        };
        axios.post('/api/transactions/store', data)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error);
            });
            alert('data berhasil dikirim!');
            history.push('/success');
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
   return (
   <>
        <Header />
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total"><span>Rp.{ FormatNumber(total)}</span></div>
            <h3 className="clr-primary">Informasi Pembeli </h3>
                <span>Silahkan isi data anda terlebih dahulu dan lakukan pembayaran ke no rekening yang tertera lalu Klik Already Paid</span>
            <div className="checkout-body">
                <div className="left-body">
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="name" label="Nama Lengkap" handleChange={handleName} required value={name} />
                        <Input type="text" name="email" label="Email Address" handleChange={handleEmail} required value={email} />
                        <Input type="text" name="phone" label="Phone Number" handleChange={handlePhone} required value={phone} />
                        <Input type="text" name="address" label="Address Number" handleChange={handleAddress} required value={address} />
                        <Input type="hidden" name="total" value={_total} />
                        <Input type="hidden" name="status" value={_status}/>
                        <Button type="submit" className="primary-button" isBlock>Already Paid</Button>
                    </form>
                </div>
                <div className="right-body">
                    <ul>
                        <li>Total Biaya <span>Rp.{ FormatNumber(total) }</span></li>
                        <li>Bank Transfer <span>BCA</span></li>
                        <li>No.Rekening <span>8575180261</span></li>
                        <li>Nama Penerima <span>Andrian Davinta</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </>
    );
    }
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})
export default connect(mapStateToProps)(CheckoutPage);