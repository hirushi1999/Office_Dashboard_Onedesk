import React from 'react';
import Chess from "../asset/chess.jpg"
import Chess1 from "../asset/Chess1.jpg"
import Hotel from "../asset/hotel.jpg"
import Blood from "../asset/Blood.jpg"

const NewsEvents = () => {
  return (
    <>
        <div className='p-2'>
            <div className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center dark:bg-gray-900 dark:text-white" 
            style={{ backgroundImage: `url(${Chess})` }}>
              <div className="absolute inset-0 bg-black/50 backdrop-brightness-50"></div>
              <div className="relative z-10 px-4">
              <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-amber-500 font-bold italic mt-10'>Chess Tournament</h1>
                <p className='text-lg sm:text-2xl md:text-3xl text-orange-200 italic mt-6'>"Where strategy meets glory — Prepare for battle on the board."</p>
                <p className='text-3xl sm:text-5xl md:text-6xl text-amber-200 font-semibold italic mt-12'>Coming Soon!</p>
                <button className='mt-8 sm:mt-10 rounded-full py-2 px-6 sm:px-10 bg-black text-white shadow-md hover:shadow-yellow-400 font-bold text-lg sm:text-xl transition duration-300'>Registration is open</button>
              </div>
            </div>
            <div className='p-2 flex flex-col sm:flex-row gap-2 sm:gap-2'> 
              <div className='dark:bg-gray-900 dark:text-white w-full lg:w-1/3 bg-slate-50 p-2 m-4 rounded-xl lg:ml-10'>
                <h1 className='text-center m-4 sm:m-1 text-lg text-cyan-700 font-semibold'>Chess Tournament</h1>
                <img src={ Chess1 } alt="chess board" className=" w-auto h-auto object-contain"/>
                <div>
                  <p className='text-base m-1 text-justify'>Get ready to test your strategic skills and compete with colleagues in our upcoming Office Chess Tournament! Whether you’re a seasoned player or a curious beginner, this is your chance to enjoy some friendly competition and sharpen your mind. The event will take place in the near future, and registrations will be opening shortly. Stay tuned for the official date and further details. 
                    Don’t miss the chance to be part of this exciting challenge!</p>
                  <p className='text-base mt-10 underline text-cyan-700 cursor-pointer'>Read More</p>
                </div>
              </div>
              <div className='dark:bg-gray-900 dark:text-white w-full lg:w-1/3 bg-slate-50 p-2 m-4 rounded-xl lg:ml-10'>
                <h1 className='text-center m-4 sm:m-1 text-lg text-cyan-700 font-semibold'>Annual Outing 2025 – A Day to Remember!</h1>
                <img src={ Hotel } alt="hotel " className=" w-auto h-auto object-contain"/>
                <p className='text-base m-1 text-justify'>Our much-anticipated Annual Outing took place on September 5, and it was truly a day filled with fun, laughter, and team spirit. Employees from across departments came together to unwind, connect, and enjoy a refreshing break from the usual routine.
                The day featured a perfect blend of outdoor activities, team games, and relaxation, creating unforgettable memories for everyone.</p>
                <p className='text-base mt-16 underline text-cyan-700 cursor-pointer'>Read More</p>
              </div>
              <div className='dark:bg-gray-900 dark:text-white w-full lg:w-1/3 bg-slate-50 p-2 m-4 rounded-xl lg:ml-10'>
                <h1 className='text-center m-4 sm:m-1 text-lg text-cyan-700 font-semibold'>Blood Donation Campaign – August 28</h1>
                <img src={ Blood } alt="hotel " className=" w-auto h-auto object-contain"/>
                <p className='text-base m-1 text-justify'>We are proud to share the success of our recent Blood Donation Campaign held on August 28 at our office premises. This meaningful initiative was organized to support those in need and promote the spirit of giving back to the community.
                With the incredible participation of our employees, the event saw a great turnout and several units of blood were donated—each one making a difference in someone’s life. </p>
                <p className='text-base mt-4 underline text-cyan-700 cursor-pointer'>Read More</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default NewsEvents