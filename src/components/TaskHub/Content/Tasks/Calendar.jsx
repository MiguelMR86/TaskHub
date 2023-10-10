import React, { useContext } from 'react'
import { Context } from '../../../../context/Context'

function Calendar() {
    const { darkMode } = useContext(Context)
  return (
    <div className={`w-1/2 h-full flex flex-col gap-4 items-end p-4 border-4 border-[#DCDCDC] rounded-lg
        ${darkMode ? "bg-gray-600" : "bg-white"}`}>
        <h2 className='w-full text-center p-4 text-2xl font-bold'>Calendar</h2>
    </div>
)
}

export default Calendar