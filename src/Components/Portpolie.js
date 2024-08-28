import React from 'react';
import E_commerce from "./images/E-Commerce-Website-Using-Bootstap-5.png"
import Ecommerce from "./images/Ecommerce-Jewellery-Website.png";
import christmas from "./images/Christmas-Landing-Page.png";
import Pizza from "./images/Pizza-Landing-Page.png";
import Foodies from "./images/Foodies.png";
import Hashtag from "./images/Hashtag-Landing-Page.png";
import Seo from "./images/SEO-Landing-Page.png";
import Landing from "./images/App-Landing-Page.png"



const Portpolie = () => {
    return (
        <div className='absolute top-26  w-full'>
            <section id="portfolio" className="portfolio_wrapper bg-dark ">
                <div className="contaniner ">
                    <div className="row mt-20">
                        <div className="col-sm-12 text-center mb-4">
                            <span className="subtitle text-white mt-10">My Comlete project</span>
                            <h2>My Latest project</h2>
                            <p>There are many variations of passages of
                                Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mb-20">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">

                                    <span style={{
                                        backgroundImage: `url(${christmas})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">

                                    <span style={{
                                        backgroundImage: `url(${Pizza})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <span style={{
                                        backgroundImage: `url(${Seo})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <span style={{
                                        backgroundImage: `url(${Hashtag})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <span style={{
                                        backgroundImage: `url(${Foodies})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <span style={{
                                        backgroundImage: `url(${Ecommerce})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <span style={{
                                        backgroundImage: `url(${Landing})`

                                    }}></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <span style={{
                                        backgroundImage: `url(${E_commerce})`

                                    }}></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Portpolie