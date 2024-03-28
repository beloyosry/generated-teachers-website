import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutTeacher from "./components/AboutTeacher";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import TeacherLinks from "./components/TeacherLinks";
import Testimonials from "./components/Testimonials";
import TeacherServices from "./components/TeacherServices";

import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const pageDir = document.documentElement.dir;
const App = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled past the Hero section
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                setShowScrollButton(scrollTop > 100);
            }
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full bg-page">
            <div className="min-w-full fixed left-1/2 transform -translate-x-1/2 z-50">
                <NavBar />
            </div>
            <Hero />
            <AboutTeacher />
            <TeacherServices />
            <Testimonials />
            <TeacherLinks />
            <ContactUs />
            <Footer />

            {/* Scroll to top button */}
            <div
                className={`${
                    showScrollButton ? "opacity-100" : "opacity-0"
                } fixed bottom-5 right-5 w-11 h-11 rounded-full bg-primary text-center flex justify-center items-center hover:brightness-90 transition-all duration-300 ease-in-out cursor-pointer`}
                onClick={scrollToTop}>
                <ChevronUpIcon color="white" width={25} />
            </div>
        </div>
    );
};

export default App;
