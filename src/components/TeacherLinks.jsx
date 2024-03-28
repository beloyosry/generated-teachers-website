import React from "react";
import { siteConfig } from "../siteConfig";

function TeacherLinks() {
    return (
        <div className="w-full section p-5 lg:px-52 bg-subscribe flex flex-col lg:flex-row justify-center gap-5 lg:justify-between items-center text-white ">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h1 className="font-bold text-3xl">الإشتراك بالمنصة</h1>
                <p className="tracking-wider">
                    يمكنك الإشتراك بالمنصة بضغط زر الإشتراك
                </p>
            </div>
            <div className="flex justify-center items-center text-center  border-[3px] border-white hover:border-transparent hover:bg-primary bg-transparent transition-all duration-300 ease-in-out cursor-pointer px-6 py-2 rounded-sm">
                <a href={siteConfig.teacherPlatform}>الإشتراك</a>
            </div>
        </div>
    );
}

export default TeacherLinks;
