import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { Button } from '@material-tailwind/react'

function UserBtn() {
  return (
    <Button  className='w-[60px] h-[60px] select-none text-white bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full'>
        <AiOutlineUser className=' scale-[2.5]'/>
    </Button>
  )
}

export default UserBtn