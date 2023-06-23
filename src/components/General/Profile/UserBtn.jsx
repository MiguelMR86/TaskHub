import React, { useEffect, useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { Button } from '@material-tailwind/react'
import { auth } from '../../../config/firebase'

function UserBtn() {
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPhotoURL(user.photoURL)
      }
    })
  }, [auth?.currentUser]);

  return (
    <Button className='w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none text-white bg-[#2196F3] rounded-full'>
        {auth?.currentUser ? 
        <img src={photoURL} alt="Google-Profile-Img" className=' rounded-full'/>
        : <AiOutlineUser size={30} />}
    </Button>
  )
}

export default UserBtn