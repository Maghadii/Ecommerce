import React from 'react'
import { NavLink } from 'react-router-dom'
import Call from '../images/call-icon.png'
import Email from '../images/email-icon.png'

const Contact = () => {
    return (
        <>
            <section className="contact-sec">
                <div className="container">
                    <div className="contact-main">
                        <div className="breadcrumb-main">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li class="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="contact-form-main">
                            <div className="row">
                                <div className="col-4">
                                    <div className="left-contact">
                                        <div className="contact-detail text-start pb-5 border-2 border-bottom">
                                            <div className="d-flex align-items-center gap-3 mb-4">
                                                <img src={Call} alt="" />
                                                <h6 className='text-black m-0'>Call To Us</h6>
                                            </div>
                                            <p className='mb-3'>We are available 24/7, 7 days a week.</p>
                                            <p>Phone: +8801611112222</p>
                                        </div>
                                        <div className="contact-detail text-start mt-5">
                                            <div className="d-flex align-items-center gap-3 mb-4">
                                                <img src={Email} alt="" />
                                                <h6 className='text-black m-0'>Write To US</h6>
                                            </div>
                                            <p className='mb-3'>Fill out our form and we will contact you within 24 hours.</p>
                                            <p>Emails: customer@exclusive.com</p>
                                            <p>Emails: support@exclusive.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="contect-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-4">
                                                    <input type="text" name="" placeholder='Your Name' id="" />
                                                </div>
                                                <div className="col-4">
                                                    <input type="email" placeholder='Your Email' />
                                                </div>
                                                <div className="col-4">
                                                    <input type="number" placeholder='Your Phone' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <textarea cols="50" rows="9" name="" placeholder='Your Message' id=""></textarea>
                                            </div>
                                            <div className="text-end">
                                                <button>Send Massage</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact