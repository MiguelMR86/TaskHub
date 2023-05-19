import React from 'react'
import { Button } from '@material-tailwind/react'
import { TfiWorld } from 'react-icons/tfi'
function HomeBtn() {
  return (
    <Button className='w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none bg-white text-[#7c4396] border-2 border-[#7c4396] border-dashed rounded-full z-10 opacity-80'>
        <TfiWorld className='scale-[2.3]'/>
    </Button>
  )
}

export default HomeBtn