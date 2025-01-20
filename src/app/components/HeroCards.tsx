import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const HeroCards = () => {
  return (
    <div className="h-auto w-auto lg:w-[1440px]  text-[#1A202C]">
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="bg-white rounded-xl w-[350px] h-[120px] mx-auto lg:m-0 lg:h-[132px] lg:w-[486px] px-4 lg:px-5  flex flex-col justify-center ">
          <div className="flex gap-1 py-2">
            <Image
              src="/icons/radio.png"
              alt="radio"
              height={10}
              width={10}
              className="h-[16px] w-[16px] "
            />
            <p className="text-[16px] font-semibold">Pick - Up</p>
          </div>

          <div className="flex">
            <div className="w-[150px] px-5">
              <h3 className="text-[16px] font-bold my-1">Locations</h3>
              <div className="flex items-center">
                <p className="hidden lg:block text-[#90A3BF] text-[12px]">Select your city</p>
                <p className="block lg:hidden text-[#90A3BF] text-[12px]">Karachi</p>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className="bg-[#C3D4E9] h-[48px] w-[1px]"></div>

            <div className="w-[150px] px-5">
              <h3 className="text-[16px] font-bold my-1">Date</h3>
              <div className="flex items-center">
                <p className="hidden lg:block text-[#90A3BF] text-[12px]">Select your date</p>
                <p className="w-[80px] block lg:hidden text-[#90A3BF] text-[12px]">20 Dec 2024</p>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className="bg-[#C3D4E9] h-[48px] w-[1px]"></div>

            <div className="w-[150px] px-5 ">
              <h3 className="text-[16px] font-bold my-1">Time</h3>
              <div className="flex items-center">
                <p className="hidden lg:block text-[#90A3BF] text-[12px]">Select your time</p>
                <p className="block lg:hidden text-[#90A3BF] text-[12px]">07.00</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>

        
        <Image
            src="/icons/switch.png"
            alt="switch-icon"
            height={100}
            width={140}
            className="h-[100px] w-[140px] cursor-pointer flex self-center mx-0 px-0"
          />


        <div className="bg-white rounded-xl w-[350px] h-[120px] mx-auto lg:m-0 lg:h-[132px] lg:w-[486px] px-4 lg:px-5 flex flex-col justify-center ">
          <div className="flex gap-1 py-2">
            <Image
              src="/icons/radio.png"
              alt="radio"
              height={10}
              width={10}
              className="h-[16px] w-[16px] hover:shadow-[0 14px 18px rgba(0, 0, 255, 0.25)]"
            />
            <p className="text-[16px] font-semibold">Drop - Off</p>
          </div>

          <div className="flex">
            <div className="w-[150px] px-5">
              <h3 className="text-[16px] font-bold my-1">Locations</h3>
              <div className="flex items-center">
                <p className="hidden lg:block text-[#90A3BF] text-[12px]">Select your city</p>
                <p className="block lg:hidden text-[#90A3BF] text-[12px]">Karachi</p>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className="bg-[#C3D4E9] h-[48px] w-[1px]"></div>

            <div className="w-[150px] px-5">
              <h3 className="text-[16px] font-bold my-1">Date</h3>
              <div className="flex items-center">
                <p className="hidden lg:block text-[#90A3BF] text-[12px]">Select your date</p>
                <p className="w-[80px] block lg:hidden text-[#90A3BF] text-[12px]">21 Dec 2024</p>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className="bg-[#C3D4E9] h-[48px] w-[1px]"></div>

            <div className="w-[150px] px-5">
              <h3 className="text-[16px] font-bold my-1">Time</h3>
              <div className="flex items-center">
              <p className="hidden lg:block text-[#90A3BF] text-[12px]">Select your time</p>
              <p className="block lg:hidden text-[#90A3BF] text-[12px]">01.00</p>
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