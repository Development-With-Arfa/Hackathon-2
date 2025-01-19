import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-10 w-full lg:w-[1440px] bg-white py-6">
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">MORENT</h1>
          <p className="text-gray-500 self-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

   
        <div className="lists flex flex-wrap gap-12 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-4 text-[#90A3BF] text-[16px]">
              <li className="font-bold text-lg text-[#1A202C]"><h1>About</h1></li>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-4 text-[#90A3BF] text-[16px]">
              <li className="font-bold text-lg text-[#1A202C]"><h1>Community</h1></li>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-4 text-[#90A3BF] text-[16px]">
              <li className="font-bold text-lg text-[#1A202C]"><h1>Socials</h1></li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

 
      <div className="line border-t w-full border-[#e7eef6]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}