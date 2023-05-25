import React from 'react'
import { Button, Input } from "@material-tailwind/react";

function Searcher() {
  return (
    <div className="relative flex gap-2">
    <Input
        type="search"
        label="Type here..."
        className=" pr-[90px]"
    />
    <Button size="sm" className="!absolute right-1 top-1 rounded bg-gradient-to-r from-[#7c4396] to-[#993a76]">
        Search
    </Button>
    </div>
  )
}

export default Searcher