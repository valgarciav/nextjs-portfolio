"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div 
      className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-500 to-blue-400'>
          Hello, I&apos;m {" "}
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
        <p 
        className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Full stack developer in the IT world, merging creativity and tech one bug at a time.
        </p>
        {/* <div>
          <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 hover:bg-slate-200 text-white">Hire Me</button>
          <button className="px-1 py-1 w-full rounded-full sm:w-fit bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 hover:bg-slate-800 text-white mt-3">
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
          </button>

        </div> */}
        <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-300 via-purple-500 to-blue-400 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
            href={"/public/image/vg.docx"}
            download
            locale={false}
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-300 via-purple-500 to-blue-400 hover:bg-slate-800 text-white mt-3"
            >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
              </span>
            </Link>
          </div>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div 
        className='rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative'>
          <Image
            src="/image/profile.jpeg" 
            alt="profile image" 
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            width={500}
            height={500}
          />
          </div>
        </motion.div>
      </div>
    </section>
    
  );
};

export default HeroSection; 