"use client";
import { MdSearch, MdHome } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='w-full h-12 bg-textLight'>
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between ">
        <div className='items-center gap-7'>
          <ul className='flex text-[14px] gap-7'>
            <Link
              href="#" className='flex items-center gap-1 text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="relative overflow-x-hidden group"
              >
                <span className="flex items-center gap-1"><MdHome className="w-6 h-6 text-rose-500" />{""}Home</span>
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
            <Link
              href="#" className='flex items-center gap-1  text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="relative overflow-x-hidden group"
              >
                World
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
            <Link
              href="#" className='flex items-center gap-1  text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                className="relative overflow-x-hidden group"
              >
                Entertainment
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
            <Link
              href="#" className='flex items-center gap-1  text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className="relative overflow-x-hidden group"
              >
                Business
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
            <Link
              href="#" className='flex items-center gap-1  text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="relative overflow-x-hidden group"
              >
                Economy
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
            <Link
              href="#" className='flex items-center gap-1  text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="relative overflow-x-hidden group"
              >
                Cricket
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
            <Link
              href="#" className='flex items-center gap-1  text-black hover:font-bold hover:text-cyan-600 cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="relative overflow-x-hidden group"
              >
                Lifestyle
                <span className="absolute w-full h-[2px] bg-rose-500 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </motion.li>
            </Link>
          </ul>
        </div>
        <div>
          <span><MdSearch className="h-8 w-8 cursor-pointer" /></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar