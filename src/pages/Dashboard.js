import React from 'react'
import workingGirl from "../asset/workingGirl.png";
import Calendar from '../component/Calendar';

const Dashboard = () => {
  return (
    <>
        <div className='p-1 w-full flex flex-col lg:flex-row gap-4 md:gap-9'> 
            <div className='w-3/4 flex h-30 gap-4 bg-slate-50 p-2 m-10 rounded-full dark:bg-gray-900 dark:text-white'>
              <div className='w-full md:w-2/3 p-4 md:p-10'>
                <div className='font-sans md:ml-10 lg:ml-20'>
                  <h1 className='text-cyan-700 font-semibold text-2xl'><strong>Welcome,</strong> Hirushi</h1>
                  <p className='p-1 text-justify text-slate-400'>Welcome to your digital workspace — where ideas spark, teamwork thrives, and growth never stops. Every click brings us closer to our goals.s
                Let's achieve more, together.</p>
                </div>
              </div>
              <div className='w-1/3 flex justify-center items-center'>
                <img src={ workingGirl } alt="working girl" className="w-[120px] sm:w-[140px] md:w-[150px] h-auto object-contain"/>
              </div>
            </div>
            <div className='w-1/4 m-10 bg-slate-50 rounded-full justify-center items-center'>
                <Calendar/>
            </div>
        </div>
    </>
  )
}

export default Dashboard