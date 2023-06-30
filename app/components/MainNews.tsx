"use client";
import { news1, news2, news3, news4 } from '@/public/assets';
import Image from 'next/image'

const MainNews = () => {
  return (
    <div className="w-full h-full overflow-y-hidden max-h-[31.5rem] grid grid-cols-5 gap-4">
      {/* First div for the image (3/5 wide) */}
      <div className="col-span-3 cursor-pointer relative overflow-hidden">
        <Image src={news1} alt="news1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>

      {/* Second div with two columns */}
      <div className="col-span-2 flex flex-col gap-4">
        <div className="cursor-pointer relative overflow-hidden">
          {/* Content for the first column */}
          <Image src={news2} alt="news1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="grid gap-4 grid-cols-2">
          {/*  Content for the second column */}
          <div className='cursor-pointer relative overflow-hidden'>
            <Image src={news3} alt="news1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className='cursor-pointer relative overflow-hidden'>
            <Image src={news4} alt="news1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNews