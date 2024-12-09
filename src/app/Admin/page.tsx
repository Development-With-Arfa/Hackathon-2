import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='flex'>
      <div>
        <Image
          src="/img/Nav-admin.png"
          alt="side-bar"
          height={900}
          width={286}
        />
      </div>
      
      <div className='flex justify-center items-center w-full h-auto'>
      <div>
        <Image
          src="/img/Details Rental.png"
          alt=""
          height={836}
          width={534}
        />
      </div>
      <div className='h-auto'>
        <Image
          src="/img/Top 5 Car Rental.png"
          alt=""
          height={324}
          width={524}
        />
        <Image
          src="/img/transaction.png"
          alt=""
          height={480}
          width={524}
        />
      </div>
      </div>
    </section>
  )
}

export default page