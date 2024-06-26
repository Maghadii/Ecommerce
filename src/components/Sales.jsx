import React from 'react'
import Counter from './Counter'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { HiStar } from "react-icons/hi2";
import Product1 from '../images/product-1.png';
import Product2 from '../images/product-2.png';
import Product3 from '../images/product-3.png';
import Product4 from '../images/product-4.png';

const Sales = () => {
    return (
        <>
            <section className='slaes-sec'>
                <div className="container">
                    <div className="title-upper">
                        <div className='icon'></div>
                        <p className='m-0'>Today's</p>
                    </div>
                    <div className="timer-sec">
                        <h2 className='text-start mt-4 mb-0'>Flash Sales</h2>
                        <Counter />
                    </div>
                </div>
            </section>
            <section className='slider-product'>
                <div className="container">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product1} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>HAVIT HV-G92 Gamepad</h6>
                                <p className='price'>$120<span>$160</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (88)</strong>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product2} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>AK-900 Wired Keyboard</h6>
                                <p className='price'>$960<span>$1160</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (75)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product3} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>IPS LCD Gaming Monitor</h6>
                                <p className='price'>$370<span>$400</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (99)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product4} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>S-Series Comfort Chair</h6>
                                <p className='price'>$375<span>$400</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (99)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product1} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>HAVIT HV-G92 Gamepad</h6>
                                <p className='price'>$120<span>$160</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (88)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product2} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>AK-900 Wired Keyboard</h6>
                                <p className='price'>$960<span>$1160</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (75)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product3} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>IPS LCD Gaming Monitor</h6>
                                <p className='price'>$370<span>$400</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (99)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sales-product">
                                <img src={Product4} alt="" />
                                <div className="product-like">
                                    <div className="like">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="view">
                                        <IoEyeOutline />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h6>S-Series Comfort Chair</h6>
                                <p className='price'>$375<span>$400</span></p>
                                <div className="stars">
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <HiStar className='star' />
                                    <strong> (99)</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-nav-btn">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </section>
            <section className="down-btn">
                <div className="container">
                    <div className="product-all">
                        <button>View All Products</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sales
