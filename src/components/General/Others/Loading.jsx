import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import { Spinner } from "@material-tailwind/react";

function Loading() {
  const { loading } = useContext(Context)
  return (
    <div className={`absolute z-20 bg-white w-full h-screen grid place-items-center
    ${loading ? "block" : "hidden"}
    `}>
        <Spinner className="h-20 w-20" />
    </div>
  )
}

export default Loading