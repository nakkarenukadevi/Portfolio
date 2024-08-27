import React from 'react';
import service_1 from "./images/service-1.svg";
import service_2 from "./images/service-2.svg"
import service_3 from "./images/service-3.svg"
import service_4 from "./images/service-4.svg"


const Services = () => {
    return (
        <div className='absolute top-16  services_wrapper bg-dark p-10 w-full'>
            <div className="container ">
                <div className="row ">
                    <div className="col-sm-12 text-center mb-4">
                        <span className="subtitle">What i can do for you </span>
                        <h2 className="text-white">My Awesome Service</h2>
                        <p className="text-white">There are many verations of passages of Lorem
                            ipsum dolor sit amet</p>
                        <p className='text-white'>consectetur adipisicing elit. Vel, ipsam.</p>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body text-md-start text-center">
                                <img src={service_1} alt="service" className="img-fluid mb-4" />
                                <h3>Business stratagy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card ">
                            <div className="card-body text-md-start text-center">
                                <img src={service_2} alt="service" className="img-fluid mb-4" />
                                <h3>Business stratagy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body text-md-start text-center">
                                <img src={service_3} alt="service" className="img-fluid mb-4" />
                                <h3>Business stratagy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body text-md-start text-center">
                                <img src={service_4} alt="service" className="img-fluid mb-4" />
                                <h3>Business stratagy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body text-md-start text-center">
                                <img src={service_1} alt="service" className="img-fluid mb-4" />
                                <h3>Business stratagy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body text-md-start text-center">
                                <img src={service_3} alt="service" className="img-fluid mb-4" />
                                <h3>Business stratagy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services