import Image from 'next/image'

const Specification = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 text-[#90A3BF]">
        <div className="flex gap-1">
            <Image
                src="/icons/gas-station.png"
                alt="gas-icon"
                height={24}
                width={24}
                className='h-[24px] w-[24px]'
            />
            <p className='text-[14px] font-medium'>90L</p>
        </div>
        <div className="flex gap-1">
            <Image
                src="/icons/manual.png"
                alt="manual-icon"
                height={24}
                width={24}
                className='h-[24px] w-[24px]'
            />
            <p className='text-[14px] font-medium'>Manual</p>
        </div>
        <div className="flex gap-1">
            <Image
                src="/icons/people.png"
                alt="people-icon"
                height={24}
                width={24}
                className='h-[24px] w-[24px]'
            />
            <p className='text-[14px] font-medium'>2 Ppl</p>
        </div>
    </div>
  )
}

export default Specification