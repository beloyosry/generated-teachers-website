import React, { useEffect, useState } from "react";
import
{
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { pageDir } from "../App";
import { siteConfig } from "../siteConfig";

function NavList ()
{
    const [ activeNavbar, setActiveNavbar ] = useState( "" );
    const handleActiveNavbar = ( name ) =>
    {
        setActiveNavbar( name );
    };
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "" )}
            >
                <a href="#" className={`${ activeNavbar === "" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors`}>
                    الرئيسية
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "about" )}
            >
                <a href="#about" className={`${ activeNavbar === "about" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors`}>
                    عني
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "services" )}
            >
                <a href="#services" className={`${ activeNavbar === "services" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors`}>
                    الصفوف الدراسية
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "testimonials" )}
            >
                <a href="#testimonials" className={`${ activeNavbar === "testimonials" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors`}>
                    الملف
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "contactUs" )}
            >
                <a href="#contactUs" className={`${ activeNavbar === "contactUs" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors`}>
                    تواصل معنا
                </a>
            </Typography>
        </ul>
    );
}

export default function NavBar ()
{
    const [ openNav, setOpenNav ] = useState( false );
    const [ isHeroSection, setIsHeroSection ] = useState( true );

    const handleWindowResize = () =>
    {
        window.innerWidth >= 960 && setOpenNav( false );
    };

    const handleScroll = () =>
    {
        const heroSection = document.getElementById( "hero" );
        if ( heroSection )
        {
            const offsetTop = 150;
            const scrollPosition = window.scrollY;

            if ( scrollPosition <= offsetTop )
            {
                setIsHeroSection( false );
            }
            else
            {
                setIsHeroSection( true );
            }
        }
    };

    useEffect( () =>
    {
        window.addEventListener( "resize", handleWindowResize );
        window.addEventListener( "scroll", handleScroll );

        return () =>
        {
            window.removeEventListener( "resize", handleWindowResize );
            window.removeEventListener( "scroll", handleScroll );
        };
    }, [] );

    return (
        <Navbar className={`lg:px-52 py-3 min-w-full transition-all duration-500 ease-in-out rounded-none `} style={{
            backgroundColor: isHeroSection ? "white" : "transparent",
            border: "none",
            backdropFilter: "none",
            boxShadow: isHeroSection ? "0px 1px 2px rgba(16, 24, 40, 0.219)" : "none",
        }}>
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 text-3xl lg:text-[2vw] xl:text-4xl font-bold"
                >
                    {siteConfig.teacherName}
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className={`${ pageDir === "rtl" ? "mr-auto" : "ml-auto" }  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden`}
                    ripple={false}
                    onClick={() => setOpenNav( !openNav )}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav} >
                <NavList />
            </Collapse>
        </Navbar>
    );
}