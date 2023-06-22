import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { Button } from '@material-tailwind/react'

function UserBtn() {
  return (
    <Button className='w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full'>
        <AiOutlineUser className=' scale-[2.3]'/>
    </Button>
  )
}

export default UserBtn