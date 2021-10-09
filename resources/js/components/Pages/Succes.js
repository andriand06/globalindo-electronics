import React from 'react'
import SuccessIcon from '../../../../public/images/success-buy.png'
const Success = () => {
    return (
        <div className="d-flex success-checkout align-items-center justify-content-center">
            <div className="col col-lg-4 text-center">
                <img src={SuccessIcon} alt="" width="294"/>
                <h3 className="mt-4">
                    Terima kasih telah belanja di Globalindo Electronics.
                </h3>
                <p className="mt-2">
                    Pesanan Anda akan kami proses, Silakan tunggu update terbaru dari kami via email yang sudah Anda daftarkan sebelumnya.
                </p>
                <a href="/" className="primary-btn pd-cart mt-3">Back to Home</a>
            </div>
    </div>
    );
}

export default Success;