"use client";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const TrendingNow = () => {
    return (
        <div className='w-full h-14'>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-6'>
                    <button className='border px-4 py-1 bg-black text-textGreen border-textGreen uppercase text-sm font-semibold
                     font-sans hover:bg-textDark hover:text-slate-100 hover:border-textDark duration-500'>
                        trending now
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iusto.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="border p-1 cursor-pointer bg-black text-textGreen border-textGreen
                    hover:bg-textDark hover:text-slate-100 hover:border-textDark duration-500">
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    <div className="border p-1 cursor-pointer bg-black text-textGreen border-textGreen
                    hover:bg-textDark hover:text-slate-100 hover:border-textDark duration-500">
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingNow