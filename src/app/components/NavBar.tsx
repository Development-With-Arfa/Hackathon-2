import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-white'>
        <nav style={{ fontFamily: "Plus Jakarta Sans" }} className='bg-white w-[327px] mx-auto px-4 lg:w-[1440px] h-auto md:h-[124px] flex lg:justify-between items-center lg:px-8'>
            <div className="h-[100px] md:h-auto flex flex-col md:flex-row gap-5">
                <h2 className='text[24px] lg:text-[32px] font-bold text-[#3563E9]'>MORENT</h2>
                <div className='relative flex items-center justify-center mx-auto gap-5 lg:gap-0'>
                    <Image
                        src="/icons/search.png"
                        alt="search-icon"
                        height={20}
                        width={20}
                        className='h-[24px] w-[24px] mx-4 absolute left-2  lg:mx-2'
                    />
                    <input type="search" placeholder="Search something here" className="h-[48px] w-[263px] lg:h-[44px] lg:w-[492px] text-[14px] lg:rounded-full border-2 border-[#C3D4E9] pl-14" />
                    <Image
                        src="/icons/filter.png"
                        alt="filter-icon"
                        height={20}
                        width={20}
                        className='h-[40px] w-[40px] lg:h-[24px] lg:w-[24px] border-2 border-[#C3D4E9] rounded-md lg:border-none lg:relative lg:right-12 px-2 py-2 lg:p-0'
                    />
                </div>
            </div>

            <div className='lg:flex lg:gap-5 bg-white'>
                <Image
                    src="/icons/like.png"
                    alt="like-icon"
                    height={44}
                    width={44}
                    className='hidden md:block h-[44px] w-[44px] text-[#596780] fill-[#596780]'
                />
                <Image
                    src="/icons/notification.png"
                    alt="like-icon"
                    height={44}
                    width={44}
                    className='hidden md:block h-[44px] w-[44px]'
                />
                <Image
                    src="/icons/settings.png"
                    alt="like-icon"
                    height={44}
                    width={44}
                    className='hidden md:block [44px] w-[44px] '
                />
                <Image
                    src="/icons/profile.png"
                    alt="like-icon"
                    height={44}
                    width={44}
                    className='hidden lg:block h[44px] w-[44px]'
                />
            </div>

        </nav>
        </div>
    )
}

export default NavBar