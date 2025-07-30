import React from 'react'

const Calendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const calendarDays = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push(i);
    }

  return (
    <>
        <div className='dark:bg-gray-800 p-2 m-4 sm:m-4 md:m-10 shadow-md rounded-xl bg-slate-50 max-w-full'>
            <h2 className='text-base sm:text-lg font-bold text-center text-cyan-700 mb-2'>
                {today.toLocaleString('default', { month: 'long' })} {year}
            </h2>
            <div className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mt-1">
                {calendarDays.map((day, index) => (
                    <div key={index} className={`aspect-square flex items-center justify-center text-sm rounded-full ${
                        day === date
                          ? 'bg-cyan-500 text-white font-semibold'
                          : 'text-gray-800 dark:text-gray-200'
                      }`} >
                        {day || ''}
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Calendar