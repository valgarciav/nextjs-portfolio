"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-500 to-blue-400'>
            Hello, I'm {" "}
            </span>
            <br ></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Valeria',
        1000, // wait 1s before replacing "Valeria" with "Web Developer"
        'Web Developer',
        1000,
        'Full-Stack Developer ',
        1000,
        'Travel Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo quas necessitatibus deleniti asperiores repellendus.
        </p>
        <div>
          <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 hover:bg-slate-200 text-white">Hire Me</button>
          <button className="px-1 py-1 w-full rounded-full sm:w-fit bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 hover:bg-slate-800 text-white mt-3">
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
          </button>

        </div>
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative'>
          <Image
            src="/image/profile.jpeg" 
            alt="profile image" 
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            width={500}
            height={500}
          />
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection; 