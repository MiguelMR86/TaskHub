import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import {AiOutlineUser} from 'react-icons/ai'
import { Button } from '@material-tailwind/react'

function UserBtn() {
  const { user } = useContext(Context);

  return (
    <Button className='w-[50px] h-[50px] border-2 p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full'>
        {user ? 
        <img src={user.photoURL} alt="Profile-Img" className='rounded-full'/>
        : <AiOutlineUser size={30} />}
    </Button>
  )
}

export default UserBtn