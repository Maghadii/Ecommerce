import React from 'react'
import PlayStataion from '../images/play-station.png'
import WomenCol from '../images/women collection.png'
import Speakers from '../images/speakers.png'
import Perfume from '../images/perfume.png'

const Arrival = () => {
    return (
        <section className='arrival-sec'>
            <div className="container">
                <div className="title-upper">
                    <div className='icon'></div>
                    <p className='m-0'>Featured</p>
                </div>
                <div className="timer-sec">
                    <h2 className='text-start mt-4 mb-0'>New Arrival</h2>
                </div>
                <div className="arrival-box">
                    <div className="row">
                        <div className="col-6">
                            <div className="play-station">
                                <img src={PlayStataion} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="right-arrival">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="women-collection">
                                            <img src={WomenCol} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <div className="speaker">
                                            <img src={Speakers} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="perfume">
                                            <img src={Perfume} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arrival