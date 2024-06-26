import React from 'react'
import IponeImg from '../images/banner-image.png'
import AppleLogo from '../images/apple-logo.png'
import { FaArrowRight } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    return (
        <>
            <section className="banner-sec mt-5">
                <div className="container">
                    <div className="banner-main">
                        <div className="row">
                            <div className="col-3">
                                <div className="product-category">
                                    <ul className='p-0'>
                                        <li>Woman’s Fashion</li>
                                        <li>Men’s Fashion</li>
                                        <li>Electronics</li>
                                        <li>Home & Lifestyle</li>
                                        <li>Medicine</li>
                                        <li>Sports & Outdoor</li>
                                        <li>Baby’s & Toys</li>
                                        <li>Groceries & Pets</li>
                                        <li>Health & Beauty</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="product-phone">
                                    <Carousel>
                                        <Carousel.Item>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="banner-detail">
                                                        <div className="phone-name">
                                                            <img src={AppleLogo} alt="" />
                                                            <p className='m-0'>iPhone 14 Series</p>
                                                        </div>
                                                        <h1>Up to 10% off Voucher</h1>
                                                        <a href='#ś'>Shop Now <span><FaArrowRight /></span></a>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <img src={IponeImg} alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="row">

                                                <div className="col-6">
                                                    <img src={IponeImg} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <div className="banner-detail">
                                                        <div className="phone-name">
                                                            <img src={AppleLogo} alt="" />
                                                            <p className='m-0'>iPhone 14 Series</p>
                                                        </div>
                                                        <h1>Up to 10% off Voucher</h1>
                                                        <a href='#ś'>Shop Now <span><FaArrowRight /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="banner-detail">
                                                        <div className="phone-name">
                                                            <img src={AppleLogo} alt="" />
                                                            <p className='m-0'>iPhone 14 Series</p>
                                                        </div>
                                                        <h1>Up to 10% off Voucher</h1>
                                                        <a href='#ś'>Shop Now <span><FaArrowRight /></span></a>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <img src={IponeImg} alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="row">

                                                <div className="col-6">
                                                    <img src={IponeImg} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <div className="banner-detail">
                                                        <div className="phone-name">
                                                            <img src={AppleLogo} alt="" />
                                                            <p className='m-0'>iPhone 14 Series</p>
                                                        </div>
                                                        <h1>Up to 10% off Voucher</h1>
                                                        <a href='#ś'>Shop Now <span><FaArrowRight /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="banner-detail">
                                                        <div className="phone-name">
                                                            <img src={AppleLogo} alt="" />
                                                            <p className='m-0'>iPhone 14 Series</p>
                                                        </div>
                                                        <h1>Up to 10% off Voucher</h1>
                                                        <a href='#ś'>Shop Now <span><FaArrowRight /></span></a>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <img src={IponeImg} alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner