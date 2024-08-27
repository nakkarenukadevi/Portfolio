import React from 'react'
import { Link } from 'react-router-dom';
import about from "./images/about.jpg"

const About = () => {
    return <>
        <div className='about bg-dark h-lvh'>
            <div className='absolute top-28 left-10 '>
                <div className='container  flex'>
                    <div className='mx-10'>
                        <img src={about} style={{ width: "630px", height: "490px" }} class="img-fluid rounded-3"
                            alt="about-us" />
                    </div>
                    <div className='w-3/4  mx-10'>
                        <div className="text-white ">
                            <span className="subtitle " ></span>
                            <h6>My About Details</h6>
                            <h2>About Me</h2>
                            <p className='w-10/12'>
                                There are many variations of passsages of Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit. Harum voluptas sint facilis
                                animi earum rem ea commodi non, inventore vitae.
                            </p>
                        </div>

                        <div class="pt-4 text-white">
                            <ul
                                class="nav nav-pills justify-content-center justify-content-lg-between mb-3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li class="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-skill-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-skill"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-skill"
                                        aria-selected="false"
                                    >
                                        Main skill
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-Award-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-Award"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-Award"
                                        aria-selected="false"
                                    >
                                        Awards
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-experiancec-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-experiancec"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-experiancec"
                                        aria-selected="false"
                                    >
                                        Experiancec
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link bg-red-700rounded-lg"
                                        id="pills-education-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-education"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-education"
                                        aria-selected="false"
                                    >
                                        Education
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-skill"
                                    role="tabpanel"
                                    aria-labelledby="pills-skill-tab"
                                    tabindex="0"
                                >
                                    <div class="single-progress">
                                        <h6>Designing</h6>
                                        <div class="progress">
                                            <div
                                                class="progress-bar bg-info"
                                                role="progressbar"
                                                aria-label="Info example"
                                                style={{ width: "95%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span class="label">95%</span>
                                    </div>
                                    <div class="single-progress">
                                        <h6>Mangment</h6>
                                        <div class="progress">
                                            <div
                                                class="progress-bar bg-info"
                                                role="progressbar"
                                                aria-label="Info example"
                                                style={{ width: "50%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span class="label">50%</span>
                                    </div>
                                    <div class="single-progress">
                                        <h6>marketing</h6>
                                        <div class="progress">
                                            <div
                                                class="progress-bar bg-info"
                                                role="progressbar"
                                                aria-label="Info example"
                                                style={{ width: "25%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span class="label">25%</span>
                                    </div>
                                    <div class="single-progress py-3">
                                        <h6>Development</h6>
                                        <div class="progress">
                                            <div
                                                class="progress-bar bg-info"
                                                role="progressbar"
                                                aria-label="Info example"
                                                style={{ width: "80%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span class="label">80%</span>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="pills-Award"
                                    role="tabpanel"
                                    aria-labelledby="pills-Award-tab"
                                    tabindex="0"
                                >
                                    <ul class="text-start" ps="0">
                                        <li>
                                            <Link href="#">Awards.com <span>site of the day </span> </Link
                                            >2013-2020
                                        </li>
                                        <li>
                                            <Link href="#"
                                            >css Desing Awards

                                                <span>site of the day </span> </Link
                                            >2017-2018
                                        </li>
                                        <li>
                                            <Link href="#"
                                            >Design nominess <span>site of the day </span> </Link
                                            >2013-2014
                                        </li>
                                        <li>
                                            <Link href="#">Awards.com <span>winner</span> </Link>2019-2020
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="pills-experiancec"
                                    role="tabpanel"
                                    aria-labelledby="pills-experiancec-tab"
                                    tabindex="0"
                                >
                                    <ul class="text-start" ps="0">
                                        <li>
                                            <Link to="#">Awards.com <span>site of the day </span> </Link
                                            >2013-2020
                                        </li>
                                        <li>
                                            <Link to="#"
                                            >css Desing Awards

                                                <span>site of the day </span> </Link
                                            >2017-2018
                                        </li>
                                        <li>
                                            <Link to="#"
                                            >Design nominess <span>site of the day </span> </Link
                                            >2013-2014
                                        </li>
                                        <li>
                                            <Link to="#">Awards.com <span>winner</span> </Link>201-2020
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="pills-education"
                                    role="tabpanel"
                                    aria-labelledby="pills-education-tab"
                                    tabindex="0"
                                >
                                    <ul class="text-start" ps="0">
                                        <li>
                                            <Link href="#">css <span>site of the day </span> </Link
                                            >2013-2020
                                        </li>
                                        <li>
                                            <Link href="#"
                                            >llb

                                                <span>site of the day </span> </Link
                                            >2017-2018
                                        </li>
                                        <li>
                                            <Link href="#">Doctor <span>site of the day </span> </Link
                                            >2013-2014
                                        </li>
                                        <li>
                                            <Link href="#">police <span>winner</span> </Link>2019-2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default About