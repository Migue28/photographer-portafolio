import React from 'react'

import Footer from '@src/components/Footer'
import Navbar from '@src/components/Navbar'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar name='SKYLA RANGER' />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
