import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-auto w-auto lg:w-[1440px] flex gap-7 justify-center items-center lg:px-10 pt-10 mb-10 text-[#FFFFFF] bg-white'>

      <div className=' lg:w-[640px] lg:h-[360px] mx-10'>
        <div
          style={{ backgroundImage: "url('/img/hero-bg-2.png')" }}
          className='h-[232px] w-[327px] lg:w-[640px] lg:h-[360px] rounded-xl'
        >
          <div className="w-[284px] lg:h-[224px] px-5">
            <h3 className="h-[20px] w-[240px] py-3 my-5 lg:py-8 lg:my-3 text-[16px] lg:w-[272px] lg:text-[32px] font-semibold">The Best Platform for Car Rental</h3>
            <p className='w-[210px] h-[38px] lg:w-[284px] lg:h-[48px] text-[12px] lg:text-[16px] font-medium lg:py-16 py-4 flex flex-wrap'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className='h-[44px] w-[128px] text-[12px] lg:text-[16px] semi-bold lg:h-[44px] lg:w-[120px] bg-[#3563E9] rounded-sm my-5 lg:my-6 inline '>Rental Car</button>
          </div>

          <Image
            src="/img/hero-1.png"
            alt="car-img"
            height={200}
            width={200}
            className='h-[56px] w-[196px] lg:h-[116px] lg:w-[406px] mx-auto lg:ml-44'
          />
        </div>
      </div>

      <div className='hidden lg:block lg:w-[640px] lg:h-[360px]'>
        <div
          style={{ backgroundImage: "url('/img/hero-bg-1.png')" }}
          className='h-[360px] w-[640px] rounded-xl'
        >
          <div className="w-[284px] h-[224px] px-5">
            <h3 className="my-3 py-2 pt-8 w-[272px] text-[32px] font-semibold">The Best Platform for Car Rental</h3>
            <p className='w-[284px] h-[48px] text-[16px] font-medium'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className='h-[44px] w-[120px] bg-[#3563E9] rounded-sm my-6 inline '>Rental Car</button>
          </div>

          <Image
            src="/img/hero-2.png"
            alt="car-img"
            height={200}
            width={200}
            className='h-[116px] w-[406px] ml-44 my-5 lg:my-0'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection