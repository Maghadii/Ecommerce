import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { HiStar } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Product1 from '../images/product-1.png';
import Product2 from '../images/product-2.png';
import Product3 from '../images/product-3.png';
import Product4 from '../images/product-4.png';
import Product5 from '../images/explore-5.png';
import Product6 from '../images/explore-6.png';
import Product7 from '../images/explore-7.png';
import Product8 from '../images/explore-8.png';

const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 120, originalPrice: 160, image: Product1, rating: 88, description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.' },
    { id: 2, name: 'AK-900 Wired Keyboard', price: 960, originalPrice: 1160, image: Product2, rating: 75, description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.' },
    { id: 3, name: 'IPS LCD Gaming Monitor', price: 370, originalPrice: 400, image: Product3, rating: 99, description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.' },
    { id: 4, name: 'S-Series Comfort Chair', price: 375, originalPrice: 400, image: Product4, rating: 99, description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.' },
];

const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <section className="product-details">
                <div className="container">
                    <div className="breadcrumb-main">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li class="breadcrumb-item active" aria-current="page">Product</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="product-detail-inn">
                        <div className="row">
                            <div className="col-7">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="product-info">
                                    <h1>{product.name}</h1>
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <HiStar key={i} className='star' />
                                        ))}
                                        <strong> ({product.rating})</strong>
                                    </div>
                                    <p className="price">${product.price}</p>
                                    <p>{product.description}</p>
                                    <div className="actions">
                                        <button className="add-to-cart">Add To Cart</button>
                                        <button className="like"><IoIosHeartEmpty /></button>
                                        <button className="view"><IoEyeOutline /></button>
                                    </div>
                                    <div className="delivery">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="free">
                                                <CiDeliveryTruck />
                                            </div>
                                            <div className="detail">
                                                <h6>Free Delivery</h6>
                                                <spen>Enter your postal code for Delivery Availability</spen>
                                            </div>
                                        </div>
                                        <div className="return">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="free">
                                                    <TfiReload />
                                                </div>
                                                <div className="detail">
                                                    <h6>Return Delivery</h6>
                                                    <spen>Free 30 Days Delivery Returns. Details</spen>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="related-sec">
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
                </div>
            </section>
        </>

    );
}

export default ProductDetails;
