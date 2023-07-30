import React from 'react'
import NavBar from '../components/Index/Nav/NavBar'
import MainContent from '../components/Index/Main/MainContent'

function IndexPage() {
  return (
    <div className='p-4 bg-[#2196F3]'>
      <NavBar />
      <MainContent />
    </div>
  )
}

export default IndexPage