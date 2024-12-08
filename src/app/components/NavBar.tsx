import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <nav style={{ fontFamily: "Plus Jakarta Sans" }} className='w-full h-auto md:h-[124px] flex justify-between items-center px-8'>
            <div className="flex flex-col md:flex-row gap-5">
                <h2 className='text-[32px] font-bold text-[#3563E9]'>MORENT</h2>
                <div className='flex mx-auto'>
                    <Image
                        src="/icons/search.png"
                        alt="search-icon"
                        height={20}
                        width={20}
                        className='h-[24px] w-[24px] relative left-14 top-2 mx-2'
                    />
                    <input type="search" placeholder="Search something here" className="h-[44px] w-[492px] text-[14px] rounded-full border-2 border-[#C3D4E9] pl-14" />
                    <Image
                        src="/icons/filter.png"
                        alt="filter-icon"
                        height={20}
                        width={20}
                        className='h-[24px] w-[24px] relative top-2 right-12'
                    />
                </div>
            </div>

            <div className='flex gap-5'>
                <Image
                    src="/icons/heart-fill.png"
                    alt="like-icon"
                    height={20}
                    width={20}
                    className='hidden md:block h-[24px] w-[24px]'
                />
                <Image
                    src="/icons/notification.png"
                    alt="like-icon"
                    height={20}
                    width={20}
                    className='hidden md:block h-[24px] w-[24px]'
                />
                <Image
                    src="/icons/settings.png"
                    alt="like-icon"
                    height={20}
                    width={20}
                    className='hidden md:block h-[24px] w-[24px]'
                />
                <Image
                    src="/icons/profile.png"
                    alt="like-icon"
                    height={20}
                    width={20}
                    className='h-[24px] w-[24px] hidden md:block'
                />
            </div>

        </nav>
    )
}

export default NavBar