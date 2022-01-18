import React, { useState, useEffect } from 'react'
import Header from '../Parts/Header/Header';
import Footer from '../Parts/Footer';
import axios from 'axios';
const PaymentPage = ({match, location, history}) => {
    const [transaction, setTransaction] = useState([]);
    const [status, setStatus] = useState('PENDING');
    useEffect( async () => {
         await axios.get(`/api/transactions?id=${match.params.tranId}`).then(res => {
                setTransaction([res.data.data])
            })
            .catch((e) => {console.log(e)});
            axios.get(`/api/transactions/getstatus?id=${match.params.tranId}`).then(res => {
                setStatus(res.data.data);
            })
            .catch(e => {console.log(e)});

        },[]);
    useEffect(() => {
        setInterval(() => {
            axios.get(`/api/transactions/getstatus?id=${match.params.tranId}`).then(res => {
                setStatus(res.data.data);
            })
            .catch(e => {console.log(e)});
        },10000)
    });
        const oneSec = 1000;
        const oneMinute = 60 * oneSec;
        const oneHour = 60 * oneMinute;
        const oneDay = 24 * oneHour;
        const countDownDate = new Date().getTime() + 86400000;
    const timer = (setInterval(function (){
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
       const time = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";
       // Output the result in an element with id="demo"

       document.getElementById("countdown").innerHTML = time;
       //If the count down is over, write some text 
       if (distance < 0) {
           clearInterval(x);
           document.getElementById("countdown").innerHTML = "EXPIRED";
           axios.post(`/api/transaction/setstatus?id=${match.params.tranId}&status=FAILED`);
       }
       if(status == 'FAILED')
       {
        ocument.getElementById("countdown").innerHTML = "TRANSAKSI GAGAL";
       }
   },1000))

      const displayBank = () => {
          (document.getElementById("bank").style.display == "none") ? document.getElementById("bank").style.display = "block" : document.getElementById("bank").style.display = "none";
      }
      const displayVA = () => {
          (document.getElementById("va").style.display == "none") ? document.getElementById("va").style.display = "block" : document.getElementById("va").style.display = "none";
      }
      console.log(transaction); 
      console.log(status); 
      if(status == 'SUCCESS')
      {
        history.push('/success');
      }
    return (
        transaction.length > 0 && status == 'PENDING' && (
            <>          
                <Header/>  
                <section className="payment-page">
                    <div className="payment-header">
                        <h3 className="tranid">{transaction[0].id}</h3>
                        <h4 className="tranamount">Rp.{transaction[0].total.toFixed(0,2)}</h4>
                        <p>Harap Selesaikan Pembayaran dalam kurun waktu</p>
                        <p id="countdown"></p>
                    </div>
                    <div className="payment-footer">
                        <div className="footer-detail">
                            <div className="bank-detail">
                                <button className="bank-dropdown" onClick={displayBank}>Transfer Bank <span className="arrow down"></span></button>
                                <div className="bank" id="bank">
                                    <ul className="listbank">
                                        <li>Bank BCA - 8575180261</li>
                                        <li>Bank Mandiri - 110022330022</li>
                                        <li>Bank BRI - 157601231212</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="va-detail">
                                <button className="va-dropdown mt-3" onClick={displayVA}>Virtual Account <span className="arrow down"></span></button>
                                <div className="va" id="va">
                                    <ul className="listva">
                                        <li>Saat Ini belum tersedia Pembayaran melalui Virtual Account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
            )
    )
}
export default PaymentPage