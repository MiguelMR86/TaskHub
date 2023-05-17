import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'

function UserBtn() {
  return (
    <button>
        <AiOutlineUser className='w-[50px] h-[50px] mr-4 select-none p-[13px] text-white bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full transition-all hover:scale-110 hover:shadow-[0_5px_20px_#993a76]' />
    </button>
  )
}

export default UserBtn