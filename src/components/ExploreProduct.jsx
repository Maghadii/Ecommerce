import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { HiStar } from "react-icons/hi2";
import Product1 from '../images/explore-1.png';
import Product2 from '../images/explore-2.png';
import Product3 from '../images/explore-3.png';
import Product4 from '../images/explore-4.png';
import Product5 from '../images/explore-5.png';
import Product6 from '../images/explore-6.png';
import Product7 from '../images/explore-7.png';
import Product8 from '../images/explore-8.png';

const ExploreProduct = () => {
    return (
        <>
            <section className="explore-sec">
                <div className="container">
                    <div className="explore-main">
                        <div className="title-upper">
                            <div className='icon'></div>
                            <p className='m-0'>Our Products</p>
                        </div>
                        <div className="timer-sec">
                            <h2 className='text-start mt-4 mb-0'>Explore Our Products</h2>
                        </div>
                        <div className="product-box">
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
                                className="mySwiper explore-sec"
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
                            </Swiper>
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
                                className="mySwiper mt-5 mb-5"
                            >
                                <SwiperSlide>
                                    <div className="sales-product">
                                        <img src={Product5} alt="" />
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
                                        <img src={Product6} alt="" />
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
                                        <img src={Product7} alt="" />
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
                                        <img src={Product8} alt="" />
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
                            <button>View All Products</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreProduct