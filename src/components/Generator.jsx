import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/muscles'

function Header(props)
{
  const{index, title, description}= props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-red-400'>{index}</p>
        <h4 className='text-xl sm:texr-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {
  
  return (
    <SectionWrapper header= {"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'select the workout mode you want'}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type, typeIndex)=>{
        return(
          <button className='bg-slate-950 border border-red-400 py-3 rounded-lg duration-200 hover:border-red-600' key={typeIndex}>
            <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
          </button>
        )
      })}
      </div>
    </SectionWrapper>
  )
}
