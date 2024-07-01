import React from 'react'
import AboutImg from '../images/about-image.png'
import { NavLink } from 'react-router-dom'
import Home from '../images/Home.svg'
import CountUp from 'react-countup';
import Doller from '../images/dollers.svg'
import Charge from '../images/charge.svg'
import MoneyBag from '../images/money-bag.svg'
import Team1 from '../images/team-1.png'
import Team2 from '../images/team-2.png'
import Team3 from '../images/team-3.png'
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import Delivery from '../components/Delivery';

const About = () => {
    return (
        <>
            <section className="about-sec">
                <div className="container">
                    <div className="about-main">
                        <div className="breadcrumb-main">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li class="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="about-detail">
                                    <h1>Our Story</h1>
                                    <p className='mb-4'>Launced in 2015, Exclusive is South Asia’s premier onlin
                                        shopping makterplace with an active presense in Bangladesh.
                                        Supported by wide range of tailored marketing, data and service solutions,
                                        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                                        diverse assotment in categories ranging  from consumer.</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src={AboutImg} className='rounded' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter-sec">
                <div className="container">
                    <div className="counter-main">
                        <div className="row">
                            <div className="col-3">
                                <div className="main-box">
                                    <div className="icon">
                                        <img src={Home} alt="" />
                                    </div>
                                    <h4>
                                        <CountUp end={10500} duration={2.5} />
                                    </h4>
                                    <p>Sallers active our site</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="main-box">
                                    <div className="icon">
                                        <img src={Doller} alt="" />
                                    </div>
                                    <h4>
                                        <CountUp end={33000} duration={2.5} />
                                    </h4>
                                    <p>Monthly Product Sale</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="main-box">
                                    <div className="icon">
                                        <img src={Charge} alt="" />
                                    </div>
                                    <h4>
                                        <CountUp end={45500} duration={2.5} />
                                    </h4>
                                    <p>Customer active in our site</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="main-box">
                                    <div className="icon">
                                        <img src={MoneyBag} alt="" />
                                    </div>
                                    <h4>
                                        <CountUp end={25000} duration={2.5} />
                                    </h4>
                                    <p>Annual gross sale in our site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-sec">
                <div className="container">
                    <div className="team-main counter-main">
                        <div className="row">
                            <div className="col-4">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img src={Team1} alt="" />
                                    </div>
                                    <h4>Tom Cruise</h4>
                                    <p>Founder & Chairman</p>
                                    <div className="team-social-icon">
                                        <FiTwitter />
                                        <FaInstagram />
                                        <RiLinkedinLine />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img src={Team2} alt="" />
                                    </div>
                                    <h4>Emma Watson</h4>
                                    <p>Managing Director</p>
                                    <div className="team-social-icon">
                                        <FiTwitter />
                                        <FaInstagram />
                                        <RiLinkedinLine />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="team-box">
                                    <div className="team-img">
                                        <img src={Team3} alt="" />
                                    </div>
                                    <h4>Will Smith</h4>
                                    <p>Product Designer</p>
                                    <div className="team-social-icon">
                                        <FiTwitter />
                                        <FaInstagram />
                                        <RiLinkedinLine />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Delivery />
        </>
    );
}

export default About