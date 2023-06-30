"use client";

import { motion } from "framer-motion";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';
import { PiTiktokLogo } from 'react-icons/pi';
import Link from "next/link";



const TopNav = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDate = new Date();
    const today = currentDate.toLocaleDateString('en-US', options);

    return (
        <div className="w-full shadow-navbarShadow h-8 lg:h-[4vh] bg-black px-4">
            <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
                <div className="flex items-center gap-6 text-textGreen">
                    <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                        className="text-xs font-medium font-sans-serif">
                        {today}
                    </motion.div>
                    <div className='hidden  mdl:inline-flex items-center gap-7'>
                        <ul className='flex text-[13px] gap-7'>
                            <Link
                                href="#" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.2 }}
                                >
                                    Sign in / Join
                                </motion.li>
                            </Link>
                            <Link
                                href="#" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.3 }}
                                >
                                    Blog
                                </motion.li>
                            </Link>
                            <Link
                                href="#" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.4 }}
                                >
                                    Forum
                                </motion.li>
                            </Link>
                            <Link
                                href="#" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.5 }}
                                >
                                    Buy now!
                                </motion.li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-3 md:gap-5 lgl:gap-7">
                        <motion.a
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.6 }}
                            href='#' target='_blank'
                        >
                            <span className="text-md inline-flex items-center justify-center bg-hoverColor text-textGreen cursor-pointer hover:translate-y-1 transition-all duration-300">
                                <SlSocialFacebook className="w-3 h-3" />
                            </span>
                        </motion.a>
                        <motion.a
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.7 }}
                            href='#' target='_blank'
                        >
                            <span className=" text-md inline-flex items-center justify-center bg-hoverColor text-textGreen cursor-pointer hover:translate-y-1 transition-all duration-300">
                                <SlSocialInstagram className="w-3 h-3" />
                            </span>
                        </motion.a>
                        <motion.a
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.8 }}
                            href='#' target='_blank'
                        >
                            <span className="text-md inline-flex items-center justify-center bg-hoverColor text-textGreen cursor-pointer hover:translate-y-1 transition-all duration-300">
                                <PiTiktokLogo className="w-3 h-3 " />
                            </span>
                        </motion.a>
                        <motion.a
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.9 }}
                            href='#' target='_blank'
                        >
                            <span className="text-md inline-flex items-center justify-center bg-hoverColor text-textGreen cursor-pointer hover:translate-y-1 transition-all duration-300">
                                <SlSocialTwitter className="w-3 h-3" />
                            </span>
                        </motion.a>
                        <motion.a
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 1 }}
                            href='#' target='_blank'
                        >
                            <span className="text-md inline-flex items-center justify-center bg-hoverColor text-textGreen cursor-pointer hover:translate-y-1 transition-all duration-300">
                                <SlSocialLinkedin className="w-3 h-3" />
                            </span>
                        </motion.a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopNav