import React, { useContext, useEffect } from 'react'
import { Context } from '../../../context/Context'
import {FiSettings} from 'react-icons/fi'
import { Button, Switch  } from '@material-tailwind/react'

function ConfigBtn() {
  const { openConfigMenu, setOpenConfigMenu, handelDarkMode, darkMode } = useContext(Context)
  useEffect(() => {
    document.getElementById('dark-mode').checked = darkMode;
  }, []);
  return (
    <div className='relative'>
      <Button
        onClick={() => setOpenConfigMenu(!openConfigMenu)}

        className={`w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full ${openConfigMenu ? "rotate-[360deg]" : ""}`}>
          <FiSettings className=' scale-[2.3]'/>
      </Button>
      <div className={`absolute -top-[150px] -left-[150px] w-[200px] p-4 border-2 border-[#DCDCDC] bg-white text-black rounded-lg shadow-[0_5px_25px_rgba(0,0,0,0.1)] ${openConfigMenu ? "" : "hidden"}`}>
        <Button
          fullWidth
          variant="text"
          color="blue-gray"
          className='flex justify-between items-center'

        >
          Settings <p className='text-[10px]'>Soon</p>
        </Button>

        <label
          className='align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex justify-between items-center relative overflow-hidden'
          htmlFor='dark-mode'>
          Dark Mode
          <Switch onClick={handelDarkMode} id='dark-mode' name='dark-mode' color="blue"/>
        </label>

      </div>
    </div>
  )
}

export default ConfigBtn