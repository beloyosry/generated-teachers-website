import React from "react";
import { siteConfig } from "../siteConfig";

function ContactUs() {
    return (
        <div
            id="contactUs"
            className="section p-5 lg:px-52 flex justify-start items-start gap-10 bg-hero">
            {/* First section */}
            <div>
                <h1 className="text-[5vw] lg:text-4xl font-bold text-secondary mb-5">
                    {siteConfig.teacherName}
                </h1>
                <p className="text-xs lg:text-sm">
                    هنا هنكتب كلمتين مختصرين عن الأستاذة
                </p>
            </div>

            {/* Second section */}
            <div className="text-sm flex flex-col justify-start items-start gap-7">
                <h1 className="font-bold text-secondary">تواصل معنا</h1>

                {/* Contact Details */}
                <div className="flex flex-col justify-start items-start gap-3">
                    <p className="font-bold">
                        العنوان:{" "}
                        <span className=" font-normal">
                            {siteConfig.contact.address}
                        </span>
                    </p>
                    <p className="font-bold">
                        رقم الموبايل:{" "}
                        <span className=" font-normal">
                            {siteConfig.contact.phone}
                        </span>
                    </p>
                    <p className="font-bold">
                        الإيميل:{" "}
                        <span className=" font-normal">
                            <a href="mailto:info@example.com">
                                {siteConfig.contact.email}
                            </a>
                        </span>
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex justify-start items-center gap-3 ">
                    {siteConfig.social.map((icon) => (
                        <div
                            key={icon.name}
                            className="w-10 h-10 rounded-full bg-primary flex justify-center items-center cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                            <a href={icon.href}>{icon.icon}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
