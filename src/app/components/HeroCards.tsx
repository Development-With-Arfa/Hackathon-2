import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const HeroCards = () => {
  return (
    <div className='h-auto w-full  text-[#1A202C]'>
      <div className='flex justify-around'>
        <div className='h-[132px] w-[582px] px-10'>
          <div className='flex gap-1 py-2'>
            <Image
              src="/icons/radio.png"
              alt="radio"
              height={10}
              width={10}
              className='h-[16px] w-[16px] '
            />
            <p className='text-[16px] font-semibold'>Pick - Up</p>
          </div>

          <div className='flex'>
            <div className='w-[150px] px-5 border-r-2 border-[#C3D4E9]'>
              <h3 className='text-[16px] font-bold my-1'>Locations</h3>
              <div className='flex items-center'>
                <p className='text-[#90A3BF] text-[12px]'>Select your city</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className='w-[150px] px-5 border-r-2 border-[#C3D4E9]'>
              <h3 className='text-[16px] font-bold my-1'>Date</h3>
              <div className='flex items-center'>
                <p className='text-[#90A3BF] text-[12px]'>Select your date</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className='w-[150px] px-5 '>
              <h3 className='text-[16px] font-bold my-1'>Time</h3>
              <div className='flex items-center'>
                <p className='text-[#90A3BF] text-[12px]'>Select your time</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>

        
        <Image
            src="/icons/switch.png"
            alt="switch-icon"
            height={60}
            width={60}
            className='h-[100px] w-[100px]'
          />


        <div className='h-[132px] w-[582px] px-10 '>
          <div className='flex gap-1 py-2'>
            <Image
              src="/icons/radio.png"
              alt="radio"
              height={10}
              width={10}
              className='h-[16px] w-[16px] '
            />
            <p className='text-[16px] font-semibold'>Drop - Off</p>
          </div>

          <div className='flex'>
            <div className='w-[150px] px-5 border-r-2 border-[#C3D4E9]'>
              <h3 className='text-[16px] font-bold my-1'>Locations</h3>
              <div className='flex items-center'>
                <p className='text-[#90A3BF] text-[12px]'>Select your city</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className='w-[150px] px-5 border-r-2 border-[#C3D4E9]'>
              <h3 className='text-[16px] font-bold my-1'>Date</h3>
              <div className='flex items-center'>
                <p className='text-[#90A3BF] text-[12px]'>Select your date</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className='w-[150px] px-5'>
              <h3 className='text-[16px] font-bold my-1'>Time</h3>
              <div className='flex items-center'>
                <p className='text-[#90A3BF] text-[12px]'>Select your time</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default HeroCards