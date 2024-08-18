import { useState } from 'react'

import ContactForm from '@src/ui/ContactForm'

const Contact = () => {
  const [loading, useLoading] = useState(false)
  const handleContactForm = () => {}

  if (loading) {
    useLoading(false)
  }

  return (
    <div className='relative flex flex-col justify-start items-center min-h-screen bg-cover bg-center bg-mountain'>
      {/* Overlay for opacity effect */}
      <div className='absolute inset-0 bg-indigo-300 bg-opacity-70'></div>

      <h1 className='mx-4 relative z-10 text-6xl mb-4 text-white'>Want to create together?</h1>

      <div className='relative z-10 w-full max-w-md'>
        <ContactForm loading={loading} handleContactForm={handleContactForm} />
      </div>
    </div>
  )
}
export default Contact
