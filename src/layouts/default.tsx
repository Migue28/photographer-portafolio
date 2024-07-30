import React from 'react'

import Footer from '@src/components/Footer'
import Navbar from '@src/components/Navbar'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const name = 'SKYLA RANGER'
  return (
    <div className='flex flex-col h-screen'>
      <Navbar name={name} />
      <main>{children}</main>
      <Footer name={name} />
    </div>
  )
}

export default DefaultLayout
