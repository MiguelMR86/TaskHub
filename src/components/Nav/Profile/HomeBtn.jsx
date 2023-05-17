import React from 'react'
import {BsPersonWorkspace} from 'react-icons/bs'
import { Button } from '@material-tailwind/react'

function HomeBtn() {
  return (
    <Button className='w-[60px] h-[60px] select-none text-white bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full'>
        <BsPersonWorkspace className=' scale-[2.5]'/>
    </Button>
  )
}

export default HomeBtn