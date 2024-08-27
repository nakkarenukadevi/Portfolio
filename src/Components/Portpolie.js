import React from 'react';
import E_commerce from "./images/E-Commerce-Website-Using-Bootstap-5.png"
import Ecommerce from "./images/Ecommerce-Jewellery-Website.png";
import christmas from "./images/Christmas-Landing-Page.png";
import Pizza from "./images/Pizza-Landing-Page.png";
import Foodies from "./images/Foodies.png";
import Hashtag from "./images/Hashtag-Landing-Page.png";
import Seo from "./images/SEO-Landing-Page.png";



const Portpolie = () => {
    return (
        <div className='absolute top-36'>
            <section id="portfolio" className="portfolio_wrapper bg-dark ">
                <div className="contaniner">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-4">
                            <span className="subtitle">My Comlete project</span>
                            <h2>My Latest project</h2>
                            <p>There are many variations of passages of
                                Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={E_commerce} />
                                    {/* <span style="background-image:url('images/images/portfolio/Foodies.png')"></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={Ecommerce} />
                                    {/* <span style="background-image:url('images/images/portfolio/E-Commerce-Website-Using-Bootstap-5.png')"></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={E_commerce} />
                                    {/* <span style="background-image:url('images/images/portfolio/Christmas-Landing-Page.png')"></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={Foodies} />
                                    {/*                                    
                                    <span style="background-image:url('images/images/portfolio/Ecommerce-Jewellery-Website.png')"></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={Pizza} />
                                    {/* <span style="background-image:url('images/images/portfolio/HeadPhones.png')"></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={christmas} />
                                    {/* <span style="background-image:url('images/images/portfolio/Pizza-Landing-Page.png')"></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={Hashtag} />
                                    {/* <span style={{ backgroundImage: `url(${Hashtag})` }}></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card p-0">
                                    <img src={Seo} />
                                    {/* <span style="background-image:url('images/images/portfolio/App-Landing-Page.png')"></span> */}
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