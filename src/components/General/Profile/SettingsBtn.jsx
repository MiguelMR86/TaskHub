import React from 'react'
import {FiSettings} from 'react-icons/fi'
import { Button } from '@material-tailwind/react'

function SettingsBtn() {
  return (
    <Button className='w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full'>
        <FiSettings className=' scale-[2.3]'/>
    </Button>
  )
}

export default SettingsBtn