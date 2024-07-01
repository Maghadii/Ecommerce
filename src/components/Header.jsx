import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SearchIcon from '../images/search-icon.png';
import Wishlist from "../images/wishlist-icon.png";
import Cart from '../images/Cart-icon.png';
import User from '../images/user.png';
import { useAuth } from '../components/AuthContext';

const Header = () => {
    const location = useLocation();
    const isSignupPage = location.pathname === '/signup';
    const { isAuthenticated } = useAuth();

    return (
        <>
            <section className="upper-header">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="show-offer">
                                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span>ShopNow</span></p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="select-lenguage">
                                <form action="#">
                                    <select name="#" id="#">
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Gujarati">Gujarati</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <header className="header-main">
                <div className="container">
                    <div className="header-inn">
                        <div className="row">
                            <div className="col-2">
                                <div className="logo">
                                    <h4>Exclusive</h4>
                                </div>
                            </div>
                            <div className={isSignupPage ? "col-10" : "col-8"}>
                                <div className="header-menu">
                                    <div className="row">
                                        <div className="col-8">
                                            <nav>
                                                <ul>
                                                    <NavLink to="/" >Home</NavLink>
                                                    <NavLink to="/contact">Contact</NavLink>
                                                    <NavLink to="/about">About</NavLink>
                                                    <NavLink to="/signup">Sign Up</NavLink>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="col-4">
                                            <form action="#">
                                                <div className="search-form">
                                                    <input type="text" placeholder='What are you looking for?' className='border border-0 bg-transparent' />
                                                    <img src={SearchIcon} alt="" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!isSignupPage && (
                                <div className="col-2">
                                    <div className="icons">
                                        <div className="like">
                                            <img src={Wishlist} alt="" />
                                        </div>
                                        <div className="cart">
                                            <img src={Cart} alt="" />
                                        </div>
                                        {isAuthenticated && (
                                            <div className="users">
                                                <img src={User} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
