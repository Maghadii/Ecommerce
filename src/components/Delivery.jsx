import React from 'react'
import DeliveryIcon from '../images/icon-delivery.png'
import Customer from '../images/Icon-Customer service.png'
import MoneyBack from '../images/Icon-secure.png'

const Delivery = () => {
    return (
        <>
            <section className="delivery-sec">
                <div className="container">
                    <div className="delivery-main">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="icon-box">
                                            <div className="icon">
                                                <img src={DeliveryIcon} alt="" />
                                            </div>
                                            <h5>FREE AND FAST DELIVERY</h5>
                                            <p>Free delivery for all orders over $140</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="icon-box">
                                            <div className="icon">
                                                <img src={Customer} alt="" />
                                            </div>
                                            <h5>24/7 CUSTOMER SERVICE</h5>
                                            <p>Friendly 24/7 customer support</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="icon-box">
                                            <div className="icon">
                                                <img src={MoneyBack} alt="" />
                                            </div>
                                            <h5>MONEY BACK GUARANTEE</h5>
                                            <p>We reurn money within 30 days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Delivery