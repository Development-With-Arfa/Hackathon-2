'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroCards from '../components/HeroCards';
import Specification from '../components/Specification';

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }
  return (
    <div className='w-full flex h-auto'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src={'/img/Nav Bar 1.png'} alt='' width={360} height={500} />
      </div>
      <div className="w-full sm:w-[80%] bg-[#f6f7f9] sm:p-6 p-4 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <HeroCards />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Koenigsegg', image: '/img/car1.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/img/car 2.png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/img/car3.png', desc: 'Sport' },
              { title: 'All New Rush', image: '/img/car4.png', desc: 'Luxury' },
              { title: 'CR - V', image: '/img/car5.png', desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: '/img/car6.png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/img/car7.png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/img/car8.png', desc: 'SUV' },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={224} height={70} className='h-[64px] w-[142px] lg:h-[70px] lg:w-[224px] '/>
                  <Specification />
                  
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: '/img/car9.png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/img/car10.png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/img/car11.png', desc: 'Sport' },
                { title: 'NEW MG ZS', image: '/img/car12.png', desc: 'Sedan' },
                { title: 'NEW MG ZS', image: '/img/car1.png', desc: 'Sedan' },
                { title: 'NEW MG ZS', image: '/img/car 2.png', desc: 'Sports' },
                { title: 'NEW MG ZS', image: '/img/car3.png', desc: 'sudan' },
                { title: 'NEW MG ZS', image: '/img/car4.png', desc: 'Luxury' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={224} height={70} className='h-[64px] w-[142px] lg:h-[70px] lg:w-[224px] '/>
                    <Specification />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}