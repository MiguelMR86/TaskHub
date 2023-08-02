import React from 'react'
import Nav from '../components/Index/Nav'
import Main from '../components/Index/Main'
import Footer from '../components/Index/Footer'

function IndexPage() {
  return (
    <div className='w-full h-screen bg-[#e5e5f7] bg-opacity-80'>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default IndexPage