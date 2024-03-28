import React from "react";
import { siteConfig } from "../siteConfig";

function AboutTeacher() {
    return (
        <div
            id="about"
            className="w-full px-20 lg:px-52 section flex flex-col lg:flex-row justify-between items-center gap-7">
            {/* image */}
            <div className="bg-hero w-[70vw] lg:w-[40vw] p-5 lg:p-10">
                <img
                    src={siteConfig.teacherAboutImage}
                    alt="teacher-img"
                    className="w-full border-[1vw] border-white hover:scale-105 transition-all duration-300 ease-in-out"
                    loading="lazy"
                />
            </div>
            {/* text */}
            <div className="w-full lg:w-[60vw]">
                {/* header */}
                <h1 className="text-2xl lg:text-3xl font-bold">{`عن ${siteConfig.gender} ${siteConfig.teacherName}`}</h1>
                {/* slogan */}
                <p className="text-xl italic">واصل لتصل.</p>
                {/* description */}
                <p className="text-justify mt-10">
                    {siteConfig.aboutArticle.first}
                </p>

                <p className="text-justify mt-10">
                    {siteConfig.aboutArticle.second}
                </p>
                {/* brief */}
                <ul className="px-5">
                    {siteConfig.aboutArticle.points.map((point, index) => (
                        <li
                            key={index}
                            className="text-justify font-medium mt-10 list-disc">
                            {point.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AboutTeacher;
