import React from 'react'

import SendBtn from '../images/send-icon.png'
import Qrcode from '../images/Qr Code.png'
import GooglePlay from '../images/google-play.png'
import ApplePlay from '../images/apple-store.png'
import Facebook from '../images/Icon-Facebook.png'
import Twitter from '../images/Icon-Twitter.png'
import Insta from '../images/icon-instagram.png'
import LinkedIn from '../images/Icon-Linkedin.png'

const Footer = () => {
    return (
        <>
            <footer className="footer-main">
                <div className="container">
                    <div className="footer-inn">
                        <div className="row">
                            <div className="col-3 pr">
                                <div className="subscribe">
                                    <div className="logo">
                                        <h4>Exclusive</h4>
                                    </div>
                                    <h6 className='mb-3'>Subscribe</h6>
                                    <p>Get 10% off your first order</p>
                                    <form action="#">
                                        <div className="email-form">
                                            <input type="email" className='border border-0 bg-transparent w-100' placeholder='Enter your email' />
                                            <img src={SendBtn} alt="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-2 pl ">
                                <h6 className='mb-3'>Support</h6>
                                <ul>
                                    <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                                    <li>exclusive@gmail.com</li>
                                    <li>+88015-88888-9999</li>
                                </ul>
                            </div>
                            <div className="col-2 pl">
                                <h6 className='mb-3'>Account</h6>
                                <ul>
                                    <li>My Account</li>
                                    <li>Login / Register</li>
                                    <li>Cart</li>
                                    <li>Wishlist</li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                            <div className="col-2 pl">
                                <h6 className='mb-3'>Quick Link</h6>
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Terms Of Use</li>
                                    <li>FAQ</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="col-3 pl">
                                <h6 className='mb-3'>Download App</h6>
                                <div className="social-details">
                                    <span>Save $3 with App New User Only</span>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={Qrcode} alt="" />
                                        </div>
                                        <div className="col-8">
                                            <div className="play-store">
                                                <img src={GooglePlay} className='mb-2' alt="" />
                                                <img src={ApplePlay} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-icon">
                                        <img src={Facebook} alt="" />
                                        <img src={Twitter} alt="" />
                                        <img src={Insta} alt="" />
                                        <img src={LinkedIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="down-footer">
                <p className='m-0 text-white text-center'>Copyright Rimel 2022. All right reserved</p>
            </div>
        </>
    )
}

export default Footer