import React from 'react'
import logo from "./images/logo.png"
import { Link } from 'react-router-dom'
const Fotter = () => {
    return (
        <div className='bg-black text-gray-500 p-3 fixed bottom-0 w-full s'>
            <section id="contact" className="footer_wrapper mt-3 mt-md-0 ">

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 text-center text-md-start">
                            <div className="footer logo mb-3 mb-mb-0">
                                <img src={logo} className="img-fluid" style={{ width: "100px" }} alt="logo" />

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end 
    justify-content-lg-center social-icon mb-3 mb-md-0">

                                <li>
                                    <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                                <p className="mb-0">Copyright @  2022<Link to="#" className="text-danger"> Renukadevi</Link>  All Right services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fotter