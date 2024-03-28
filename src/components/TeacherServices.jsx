import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import { siteConfig } from "../siteConfig";

function TeacherServices() {
    return (
        <div id="services" className="px-5 lg:px-52  section bg-hero">
            <h1 className="text-center text-4xl font-bold text-secondary mb-10">
                الصفوف الدراسية
            </h1>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row justify-center items-center  gap-10">
                {siteConfig.cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-full lg:w-[unset] relative group transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-[5px_5px_10px_-3px_#00000042]">
                        <img
                            src={card.img}
                            alt="card-1"
                            className="w-full lg:w-[20vw] rounded-lg"
                            loading="lazy"
                        />
                        <div className="top-80 lg:top-52 invisible h-0 group-hover:visible group-hover:h-full group-hover:top-0 absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-5 bg-black bg-opacity-60 transition-all duration-300 ease-in-out">
                            <div className=" text-center text-white">
                                <a
                                    href={card.href}
                                    className="hover:text-primary transition-all duration-300 ease-in-out">
                                    <h3 className="text-lg font-bold">
                                        {card.title}
                                    </h3>
                                </a>
                                <p className="text-xs">{card.lecture}</p>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <div className="relative w-10 h-10 rounded-full bg-primary cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                                    <EyeIcon
                                        color="white"
                                        width={25}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="relative w-10 h-10 rounded-full bg-primary cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                                    <ArrowTopRightOnSquareIcon
                                        color="white"
                                        width={25}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeacherServices;
