import React, { useState } from 'react'
import Contact_img from "./images/contact.jpg";
import { Link } from "react-router-dom";


const Contact = () => {
    let [from, setfrom] = useState({
        userName: "",
        phoneNumber: "",
        email: ""
    })
    let handleContactForm = () => {

        if (from.userName == "") {
            document.getElementById("username").innerHTML = "invaild username"

        } else if (from.userName.length <= 3) {
            document.getElementById("username").innerHTML = "name is less then 6 charter"
        }
        else if (from.phoneNumber == "") {
            document.getElementById("phonenumber").innerHTML = "invalid Phonenumber"

        } else if (from.phoneNumber != "" && from.phoneNumber.length == 10) {
            document.getElementById("phonenumber").innerHTML = ""
        }

        else if (from.phoneNumber.length < 10) {
            document.getElementById("phonenumber").innerHTML = "your phone number less then 10"
        }

        else if (from.email == "") {

            document.getElementById("email").innerHTML = "your email wrong"
        }
    }
    return (
        <div>
            <section id="contact" className="contact_wrapper bg-dark mb-20">

                <div className="container ">
                    <div className="row justify-content-between align-items-center ">
                        <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start mt-28">
                            <span className="text-danger">MY complete project</span>
                            <h2 className="text-white">Hireme</h2>
                            <div className="row call_details mb-4">
                                <label className="col-sm-3 col-lg-4">Call us directly:</label>

                                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                                    <Link to=''>+91 397204780392</Link>
                                </div>
                                <label className="col-sm-3 col-lg-4">contact Email:</label>

                                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                                    <Link className="mailto:example@gamil.co">renukadevi9724@gmail.com</Link>
                                </div>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" placeholder="Your Name" autocompete="off" value={from.userName} onChange={(e) => { setfrom({ ...from, userName: e.target.value }) }} />
                                        <p id="username" className='text-red-500'></p>
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" placeholder="Your Phone" autocompete="off" value={from.phoneNumber} onChange={(e) => { setfrom({ ...from, phoneNumber: e.target.value }) }} />
                                        <p id="phonenumber" className='text-red-500'></p>
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" className="form-control" placeholder="Your Email" autocompete="off" value={from.email} onChange={(e) => { setfrom({ ...from, email: e.target.value }) }} />
                                        <p id="email" className='text-red-500'></p></div>
                                    <div className="mb-4">
                                        <textarea colas="40" rows="4" className="form-control" id="message" placeholder="write link message.." autocomplete="off">

                                        </textarea>
                                    </div>
                                    <button type="button" className="main-btn" onClick={handleContactForm}>Submit</button>
                                </form>

                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-1 mb-lg-0 mt-32 ">
                            <img src={Contact_img} className="img-fluid" alt="contact" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact