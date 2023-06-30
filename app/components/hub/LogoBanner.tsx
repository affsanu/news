"use client";
import Image from 'next/image'
import { ad, logo } from '@/public/assets';
import { motion } from "framer-motion";

const LogoBanner = () => {
  return (
    <div className='h-full m-4'>
      <div className='max-w-contentContainer  h-full flex items-center justify-between mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='w-full'>
          <Image src={logo} alt='Logo' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='w-full'>
          <Image src={ad} alt='ad' />
        </motion.div>
      </div>

    </div>
  )
}

export default LogoBanner