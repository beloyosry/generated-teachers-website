import React from "react";
import { siteConfig } from "../siteConfig";

function Hero() {
    return (
        <div
            id="hero"
            className="w-full h-screen bg-hero flex flex-col-reverse justify-center gap-20 lg:flex-row lg:justify-between items-center pt-40 pb-20 lg:px-52"
            style={{
                background: `url(${siteConfig.heroBgImage}) center top no-repeat`,
                objectFit: "cover",
                backgroundSize: "cover",
            }}>
            {/* Hero Text */}
            <div className="w-full lg:w-1/2 lg:-mt-56 flex flex-col justify-end items-center text-center lg:text-start gap-5 ">
                <div className="w-full">
                    <h6 className="text-secondary text-3xl lg:text-5xl font-bold">
                        منصة {siteConfig.gender}
                    </h6>
                    <h1 className="text-primary text-3xl lg:text-5xl font-bold mt-2">
                        {siteConfig.teacherName}
                    </h1>
                    <a
                        href="#about"
                        className="block mx-auto lg:mx-0 text-center bg-primary text-white font-medium p-2 w-1/4 mt-10 rounded-md hover:brightness-90 transition-all duration-300 ease-in-out">
                        {" "}
                        إلى المنصة
                    </a>
                </div>
            </div>
            {/* Hero Image */}
            <div className="w-full lg:h-full md:w-2/3 lg:w-1/2">
                <img
                    src={siteConfig.teacherImageHero}
                    alt="hero"
                    className="w-2/3 lg:w-full mx-auto"
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default Hero;
