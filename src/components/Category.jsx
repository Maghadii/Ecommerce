import React from 'react'
import Phone from '../images/Category-CellPhone.svg'
import Computer from '../images/Category-Computer.svg'
import Watch from '../images/Category-SmartWatch.svg'
import camera from '../images/Category-Camera.svg'
import Headphone from '../images/Category-Headphone.svg'
import Gaming from '../images/Category-Gamepad.svg'

const Category = () => {
    return (
        <>
            <section className="category-sec">
                <div className="container">
                    <div className="title-upper">
                        <div className='icon'></div>
                        <p className='m-0'>Categories</p>
                    </div>
                    <div className="timer-sec">
                        <h2 className='text-start mt-4 mb-0'>Browse By Category</h2>
                    </div>
                    <div className="category-main-box">
                        <div className="row">
                            <div className="col-2 p-0">
                                <div className="category-box">
                                    <img src={Phone} alt="" />
                                    <p>Phones</p>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <div className="category-box">
                                    <img src={Computer} alt="" />
                                    <p>Computers</p>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <div className="category-box">
                                    <img src={Watch} alt="" />
                                    <p>SmartWatch</p>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <div className="category-box">
                                    <img src={camera} alt="" />
                                    <p>Camera</p>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <div className="category-box">
                                    <img src={Headphone} alt="" />
                                    <p>HeadPhones</p>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <div className="category-box">
                                    <img src={Gaming} alt="" />
                                    <p>Gaming</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category