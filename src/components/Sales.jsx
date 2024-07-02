import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
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
import Counter from './Counter';


const Sales = () => {
    const products = [
        { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 120, originalPrice: 160, image: Product1, rating: 88 },
        { id: 2, name: 'AK-900 Wired Keyboard', price: 960, originalPrice: 1160, image: Product2, rating: 75 },
        { id: 3, name: 'IPS LCD Gaming Monitor', price: 370, originalPrice: 400, image: Product3, rating: 99 },
        { id: 4, name: 'S-Series Comfort Chair', price: 375, originalPrice: 400, image: Product4, rating: 99 },
    ];

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
                        {products.map(product => (
                            <SwiperSlide key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className="sales-product">
                                        <img src={product.image} alt={product.name} />
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
                                        <h6>{product.name}</h6>
                                        <p className='price'>${product.price}<span>${product.originalPrice}</span></p>
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <HiStar key={i} className='star' />
                                            ))}
                                            <strong> ({product.rating})</strong>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
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
    );
}

export default Sales;
