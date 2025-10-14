import React, { useState } from 'react'
import workingGirl from "../asset/workingGirl.png";
import Calendar from '../component/Calendar';
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { IoChatbox, IoAddSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiClockify } from "react-icons/si";
import { HiDotsVertical } from "react-icons/hi";
import { GiAchievement } from "react-icons/gi";
import { MdGTranslate } from "react-icons/md";
import BirthdayGirl from "../asset/BirthdayGirl.png";
import BirthdayBoy from "../asset/cartoonboy.png";
import WeatherWidget from './WeatherWidget';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1002, text: 'Developed transaction summary report - PDF', done: false },
    { id: 1003, text: 'Completed style issues in transaction management page', done: true },
    { id: 1004, text: 'Create transaction database query', done: false },
    { id: 1005, text: 'Developed CR changes', done: false },
    { id: 1006, text: 'Fixed live issue on ticket generation', done: false }
  ]); 

  const toggleDone = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, done: !task.done } : task)
    );
  }

  const [events, setEvents] = useState([
    { time: "09.00 AM", text: 'Daily Stand up Meeting', conductedBy: 'SE-Mr.Nisala Perera', status: 'Pending'},
    { time: "10.30 AM", text: 'Team Progress Meeting', conductedBy: 'TL-Mr.Amal Fernando', status: 'Cancelled'},
    { time: "01.00 PM", text: 'Sprint Review Meeting', conductedBy: 'Team 01', status: 'Pending'}
  ]);

  return (
    <>
        <div className='p-2 w-full flex flex-col lg:flex-row gap-4'> 
            <div className='w-full lg:w-3/4 flex flex-col sm:flex-row items-center bg-slate-50 dark:bg-gray-900 dark:text-white p-2 m-4 sm:m-4 md:m-10 rounded-xl shadow-md'>
              <div className='w-full md:w-2/3'>
                <div className='font-sans'>
                  <h1 className='text-cyan-700 font-semibold text-2xl sm:m-10'><strong>Welcome,</strong> Hirushi</h1>
                  <p className='mt-2 text-slate-400 text-sm sm:text-base text-justify sm:m-10'>Welcome to your digital workspace — where ideas spark, teamwork thrives, and growth never stops. Every click brings us closer to our goals.s
                Let's achieve more, together.</p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0'>
                <img src={ workingGirl } alt="working girl" className="w-[120px] sm:w-[140px] md:w-[150px] h-auto object-contain"/>
              </div>
            </div>
            <div className='w-full lg:w-1/4'>
                <Calendar/>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <div className='dark:bg-gray-900 dark:text-white w-full lg:w-3/4 flex flex-col sm:flex-row bg-slate-50 rounded-full shadow-md p-2 text-cyan-600 cursor-pointer gap-4 lg:gap-20 text-4xl justify-center items-center lg:ml-10'>
            <Link to={"https://www.microsoft.com/en-us/microsoft-365/outlook/log-in"} target="_blank" rel="noopener noreferrer" title='Outlook'>
              <PiMicrosoftOutlookLogoFill />
            </Link>
            <Link to={"https://mail.google.com/chat"} target="_blank" rel="noopener noreferrer" title='Chat'>
              <IoChatbox />
            </Link>
            <Link to={"https://github.com/"} target="_blank" rel="noopener noreferrer" title='GitHub'>
              <FaGithub />
            </Link>
            <Link to={"https://www.atlassian.com/software/jira"} target="_blank" rel="noopener noreferrer" title='Jira'>
              <SiJira />
            </Link>
            <Link to={"https://clockify.me/"} target="_blank" rel="noopener noreferrer" title='Clockify'>
              <SiClockify />
            </Link>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-2 mt-6'>
          <div className='dark:bg-gray-900 dark:text-white w-full lg:w-1/4 bg-slate-50 p-2 m-4 rounded-xl lg:ml-10'>
            <div className='flex justify-between items-center lg:p-4 flex'>
              <h1 className='text-cyan-700 font-semibold'>To do List</h1>
              <div className='text-cyan-700 text-right text-3xl hover:scale-110 transition-transform cursor-pointer'><IoAddSharp /></div>
            </div>
            <ul className='px-4 space-y-2 py-4'>
              {tasks.map(task => (
              <li key={task.id}>
                <input type='checkbox' checked={task.done} className='accent-cyan-700 w-4 h-4' onChange={() => toggleDone(task.id)}/>
                <span className={`text-black-700 ${task.done ? 'line-through opacity-60' : ''}`}>{task.text}</span>
              </li>
              ))}
            </ul>
          </div>
          <div className='dark:bg-gray-900 dark:text-white w-full lg:w-1/4 bg-slate-50 p-2 m-4 rounded-xl lg:ml-10'>
            <div className='flex justify-between items-center lg:p-4 flex'>
              <h1 className='text-cyan-700 font-semibold'>Upcoming Events</h1>
              <div className='text-cyan-700 text-right text-3xl hover:scale-110 transition-transform cursor-pointer'><HiDotsVertical /></div>
            </div>

            <div className='px-4'>
                <hr className='border-t mb-4 border-cyan-300'/>
            </div>

            <ul className='px-4 space-y-2 py-4'>
              {events.map(event => (
              <li key={event.time} className='relative pl-4 border-l-2 border-cyan-400'>
                <div className='absolute -left-1 top-1 w-2 h-2 bg-cyan-600 rounded-full'></div>
                <div className='flex p-2 gap-1'>
                  <p className='text-normal text-gray-600 font-medium dark:text-white'>{event.time}</p>
                  <span className='text-gray-800 dark:text-white'>{event.text}</span>
                  <button className={`rounded-full px-2 text-white text-sm 
                    ${event.status === 'Cancelled' ? 'bg-red-500' : 'bg-yellow-500'}`}>{event.status}</button>
                </div>
              </li>
              ))}
            </ul>
          </div>
          <div className='dark:bg-gray-900 dark:text-white w-full lg:w-1/4 bg-slate-50 p-2 m-4 rounded-xl lg:ml-10'>
            <div className='flex justify-between items-center lg:p-4 flex'>
              <h1 className='text-cyan-700 font-semibold'>Stars of the Month</h1>
              <div className='text-cyan-700 text-right text-3xl hover:scale-110 transition-transform cursor-pointer'><GiAchievement /></div>
            </div>
            <div className='lg:p-4 space-y-4'>
              <h2 className='text-cyan-700 font-semibold text-md mb-1'>🏆Best Project</h2>
              <div className='bg-white dark:bg-gray-800 rounded-md p-2 shadow'>
                <p className='font-medium flex dark:text-white justify-between'><span className='text-3xl text-blue-800'><MdGTranslate /></span>NextGen Product</p>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-right'>Led by: Team Alpha</p>
              </div>

              <h2 className='text-cyan-700 font-semibold text-md mb-1'>🌟Best Employer</h2> 
              <div className='bg-white dark:bg-gray-800 rounded-md p-2 shadow'>
                <p className='font-medium flex dark:text-white justify-between'>Hirushi Nethmini</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>Software Engineer - Web</p>
              </div>             
            </div>
          </div>
          <div className='w-full lg:w-1/4'>
            <div className='dark:bg-gray-800 p-2 mb-4 sm:m-4 lg:mr-10 shadow-md rounded-xl bg-slate-50 max-w-full'>
              <h1 className='flex justify-center mb-1 font-semibold text-md text-gray-500'>Happy</h1>
              <h1 className='flex justify-center font-semibold text-md text-fuchsia-600 mb-2'>Birthday!!!</h1>
                <div className='flex items-center justify-center'>
                  <img src={ BirthdayGirl } alt="birthday girl" className="w-[100px] sm:w-[60px] md:w-[80px] h-auto rounded-full border-4 border-amber-400"/>
                </div>
                <div className='mt-2'>
                  <p className='text-center text-amber-800 font-bold text-md'>Kasthuri Fernandez</p>
                  <p className='text-center text-amber-500 font-semibold text-md'>Today</p>
                </div>
            </div>
            <div className='dark:bg-gray-800 p-2 sm:m-4 lg:mr-10 shadow-md rounded-xl bg-slate-50 max-w-full'>
              <h1 className='flex justify-center mb-1 font-semibold text-md text-gray-500'>Upcoming Birthdays</h1>
              <div className='flex ml-4 gap-10'>
                  <img src={ BirthdayBoy } alt="birthday girl" className="w-[60px] sm:w-[50px] md:w-[40px] h-auto rounded-xl border-4 border-blue-300"/>
                  <div className='dark:text-white'>
                    <p className='text-sm'>Sam Linderson</p>
                    <p className='text-sm text-gray-400'>Tomorrow</p>
                  </div>
                </div>
            </div>
            {/* <Calendar/> */}
          </div>
          <div className='dark:bg-gray-800 p-2 sm:m-4 lg:mr-10 shadow-md rounded-xl bg-slate-50 max-w-full'>
            <WeatherWidget />
          </div>
        </div>
    </>
  )
}

export default Dashboard