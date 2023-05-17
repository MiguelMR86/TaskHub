import React from 'react'
import {FiSettings} from 'react-icons/fi'
import { Button } from '@material-tailwind/react'

function SettingsBtn() {
  return (
    <Button className='w-[60px] h-[60px] select-none text-white bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full hover:animate-rotate360'>
        <FiSettings className=' scale-[2.5]'/>
    </Button>
  )
}

export default SettingsBtn