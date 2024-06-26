import React from 'react'
import MusicImage from '../images/Group 1000005941.png'
import Counter from './Counter'

const Enhance = () => {
    return (
        <>
            <section className="enhance-sec">
                <div className="container">
                    <div className="enhance-main">
                        <div className="row">
                            <div className="col-5">
                                <div className="product-detail-main">
                                    <p>Categories</p>
                                    <h1>Enhance Your Music Experience</h1>
                                    <Counter />
                                    <button>Buy Now!</button>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="product-img">
                                    <img src={MusicImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Enhance