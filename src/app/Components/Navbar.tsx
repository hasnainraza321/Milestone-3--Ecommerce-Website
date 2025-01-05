import React from 'react'
import { GiFullPizza } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center gap-2'>
                {/* Logo Pizza */}
                <GiFullPizza className='w-10 h-10 text-orange-400 hover:text-yellow-500' />

                {/* Search Icon */}
                <div style={{ position: 'relative' }}>
                  <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[300px] pr-10 hidden lg:block md:block'
                    placeholder='Search for your favorite Pizza from menu.' />
                  <FaSearch className='w-5 h-5 text-yellow-500 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block' />
                </div>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <FaBolt className='w-5 h-5 text-yellow-500 hidden lg:block md:block' />
                <p className='text-sm text-white hidden lg:block md:block'>Order now and get it with
                  <span className='text-white'>20 minutes!</span>
                </p>

                {/* Cart Icon */}
                <IoCartOutline className='inline-block p-1 w-6 h-6 rounded-full ring-1 ring-yellow-500 relative text-yellow-500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
