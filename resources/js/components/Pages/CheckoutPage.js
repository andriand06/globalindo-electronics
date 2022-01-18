import React, {useState, useRef } from 'react'
import { connect } from 'react-redux';
import Header from '../Parts/Header/Header';
import Footer from '../Parts/Footer';
import Input from '../Elements/Input/index'
import Button from '../Elements/Button/index'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../Parts/CheckoutItem/index';
import FormatNumber from '../utils/FormatNumber'
import emailjs from 'emailjs-com';
import axios from 'axios';
const CheckoutPage = ({cartItems,total,history}) => {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [_total, setTotal] = useState(total);
    const [_status, setStatus] = useState('PENDING');
    const getTransactionId = () => {
        const date = new Date();
        var hours = String(date.getHours());
        var minutes = String(date.getMinutes());
        var day = String(date.getDate());
        var month = String(date.getMonth()+1);
        const year = String(date.getFullYear());
        if(day < 10) 
        {
            day = '0' + day;
        }
        if(month < 10)
        {
            month = '0' + month;
        }
        if(hours < 10)
        {
            hours = '0' + hours;
        }
        if(minutes < 10)
        {
            minutes = '0' + minutes;
        }
        const dateInNumber = day.concat(month,year,hours,minutes);
        const transactionId = 'TRX' + dateInNumber;
        return transactionId;
    }
    const generateNumber = (num) => {
        const randNum = Math.ceil(Math.random() * 1000);
        return parseFloat(num) + parseFloat(randNum);
    }
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            transactionId : getTransactionId(),
            name: name,
            email: email,
            phone: phone,
            address: address,
            total : generateNumber(_total),
            status : _status,
        };
        axios.post('/api/transactions/store', data)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error);
            });
        const cartItemsArray = Object.values(cartItems);
        var collections_id = [];
        var items_id = [];
        var quantity = [];
        for(const items of cartItemsArray)
        {
            console.log(items);
            collections_id.push(items.collections_id); 
            items_id.push(items.id);
            quantity.push(items.quantity);
        }
        const transactionItems = {
            transactions_id: getTransactionId(),
            collections_id: collections_id,
            items_id: items_id,
            quantity: quantity
        };
        axios.post('/api/transactiondetails/store',transactionItems)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error);
            });
            emailjs.sendForm('service_kbvg4qc', 'checkout_form', form.current, 'user_rU1RvqMox6Fljlpv00bv9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            cartItems.splice(0,cartItems.length);
            alert('data berhasil dikirim!');
            history.push('/payment/'+data.transactionId+'/'+data.total);
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
                <span className="pay-info">Silahkan isi data anda terlebih dahulu dan klik Tombol Pay Now</span>
            <div className="checkout-body">
                <div className="userdetail-body">
                    <form onSubmit={handleSubmit} ref={form}>
                        <Input type="text" name="name" label="Nama Lengkap" handleChange={handleName} required value={name} />
                        <Input type="text" name="email" label="Email Address" handleChange={handleEmail} required value={email} />
                        <Input type="text" name="phone" label="Phone Number" handleChange={handlePhone} required value={phone} />
                        <Input type="text" name="address" label="Address Number" handleChange={handleAddress} required value={address} />
                        <Input type="hidden" name="total" value={_total} />
                        <Input type="hidden" name="status" value={_status}/>
                        <Button type="submit" className="primary-button" isBlock>Pay Now</Button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </>
    );
    }
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
})
export default connect(mapStateToProps)(CheckoutPage);