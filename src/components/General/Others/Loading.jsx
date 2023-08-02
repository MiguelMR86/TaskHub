import React from 'react'
import { Spinner } from "@material-tailwind/react";

function Loading() {
  return (
    <div className='absolute z-20 bg-white w-full h-screen grid place-items-center'>
        <Spinner className="h-20 w-20" />
    </div>
  )
}

export default Loading