import React, { useEffect } from "react";
import { siteConfig } from "../siteConfig";

function Testimonials() {
    const [firstCounter, setFirstCounter] = React.useState(0);
    const [secondCounter, setSecondCounter] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const testimonialsSection = document.getElementById("testimonials");
            if (testimonialsSection) {
                const rect = testimonialsSection.getBoundingClientRect();
                const isVisible =
                    rect.top < window.innerHeight && rect.bottom >= 0;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial scroll position

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateCounters = async () => {
            const promises = [];

            // Update both counters simultaneously
            promises.push(
                new Promise((resolve) => {
                    for (
                        let i = 0;
                        i <= siteConfig.initialCounters.first;
                        i++
                    ) {
                        setTimeout(() => {
                            setFirstCounter(i);
                        }, 100 * i); // Adjust delay time as needed
                    }
                    // Resolve the promise after updating the first counter
                    setTimeout(() => {
                        resolve();
                    }, 100 * siteConfig.initialCounters.first); // Resolve after the last update
                })
            );

            promises.push(
                new Promise((resolve) => {
                    for (
                        let i = 0;
                        i <= siteConfig.initialCounters.second;
                        i++
                    ) {
                        setTimeout(() => {
                            setSecondCounter(i);
                        }, 100); // Adjust delay time as needed
                    }
                    // Resolve the promise after updating the second counter
                    setTimeout(() => {
                        resolve();
                    }, 100 * siteConfig.initialCounters.second); // Resolve after the last update
                })
            );

            // Wait for both promises to resolve
            await Promise.all(promises);
        };
        if (isVisible) {
            updateCounters();
        }
    }, [
        siteConfig.initialCounters.first,
        siteConfig.initialCounters.second,
        isVisible,
    ]);

    return (
        <div
            id="testimonials"
            className="section p-5 lg:px-52 flex flex-col justify-start items-center gap-20">
            {/* Title */}
            <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-secondary">{`ليه تشترك في منصة ${siteConfig.gender} ${siteConfig.teacherName}؟`}</h1>
                <p className="mt-5">هنا هنكتب كلمتين.</p>
            </div>
            {/* Counter */}
            <div className="w-[70vw] lg:w-[40vw] mx-auto flex justify-between items-center">
                <div className="text-center">
                    <span className="text-secondary font-bold text-5xl">
                        {firstCounter}
                    </span>
                    <p>سنين خبرة</p>
                </div>
                <div className="text-center">
                    <span className="text-secondary font-bold text-5xl">
                        {secondCounter}
                    </span>
                    <p>طالب</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
