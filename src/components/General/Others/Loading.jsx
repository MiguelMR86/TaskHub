import React from 'react'
import { Spinner } from "@material-tailwind/react";

function Loading() {
  return (
    <div className='w-full h-screen'>
        <Spinner className="h-10 w-10" />
    </div>
  )
}

export default Loading