import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-auto w-full flex  justify-center items-center lg:px-10 py-10 text-[#FFFFFF]'>

      <div className='h-auto w-full lg:w-1/2 flex justify-center'>
        <div
          style={{ backgroundImage: "url('/img/hero-bg-2.png')" }}
          className='h-[360px] w-[640px] rounded-lg'
        >
          <div className="lg:w-1/2 px-5">
            <h3 className="text-[32px] font-semibold">The Best Platform for Car Rental</h3>
            <p className='lg:py-5 py-2'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className='h-[44px] w-[120px] bg-[#3563E9] rounded-sm my-3 lg:my-6 inline '>Rental Car</button>
          </div>

          <Image
            src="/img/hero-1.png"
            alt="car-img"
            height={200}
            width={200}
            className='h-[116px] w-[406px] mx-auto relative bottom-8 lg:bottom-16 left-7 my-5 lg:my-0'
          />
        </div>
      </div>

      <div className='hidden lg:flex h-auto w-full lg:w-1/2  justify-center'>
        <div
          style={{ backgroundImage: "url('/img/hero-bg-1.png')" }}
          className='h-[360px] w-[640px] rounded-lg'
        >
          <div className="w-1/2 px-5">
            <h3 className="text-[32px] font-semibold">The Best Platform for Car Rental</h3>
            <p className='py-5'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className='h-[44px] w-[120px] bg-[#3563E9] rounded-sm my-6 inline '>Rental Car</button>
          </div>

          <Image
            src="/img/hero-2.png"
            alt="car-img"
            height={200}
            width={200}
            className='h-[108px] w-[340px] mx-auto relative bottom-16 left-7'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection