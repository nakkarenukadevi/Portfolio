import React from "react";

const Home = () => {
    return (
        <div className="bg-black min-h-screen absolute top-20 w-full h-full">
            <div className="relative top-18 mt-20 left-48 ">
                <p className="text-white text-xl my-3 font-sans">welcome to my world</p>
                <p className="text-white text-4xl font-extrabold my-3 ">
                    I'm Renuka devi
                </p>
                <p className="text-red-500 font-extrabold text-6xl my-3">
                    {" "}
                    Js Developer.
                </p>

                <button className="text-white px-6 py-3 border-2 border-white rounded-full my-5 transition-colors duration-1000 ease-in-out hover:bg-red-500">
                    <a href="https://docs.google.com/document/d/1b-PvWuPVFfc2m2_RD1RZkyWM_LCMQmqB/edit?usp=sharing&ouid=106804991938683880082&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                        Download Resume
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Home;
