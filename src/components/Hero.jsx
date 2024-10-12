import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-3'>
      <p>Time to get some</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl'>Heroic <span className='text-red-600'>Muscles</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>Welcome to <span className='text-red-500 font-medium'>Heroic Muscles</span>, your gateway to a healthier, stronger you! We're a community-driven gym dedicated to providing a supportive and motivating environment for all fitness levels. Whether you're a seasoned athlete or just starting your fitness journey, our expert trainers and state-of-the-art equipment will help you reach your goals. Join us and experience the transformative power of fitness!</p>
      <button className='px-8 py-4 rounded-md border-[2px] bg-slate border-red-400 border-solid redShadow duration-200'>
        <p>Start!</p>
      </button>
    </div>
  )
}
