import { SubmitHandler, useForm } from 'react-hook-form'

import { ContactFormData } from '@src/types/contact'

type ContactFormProps = {
  loading: boolean
  handleContactForm: (contactFormData: ContactFormData) => void
}

const ContactForm = ({ handleContactForm, loading }: ContactFormProps) => {
  const { handleSubmit } = useForm<ContactFormData>()
  const onSubmit: SubmitHandler<ContactFormData> = (data) => handleContactForm(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-4'>
      <div className='mb-4'>
        <label className='text-2xl block text-white font-bold' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full px-3 py-2 border rounded'
          required
        />
      </div>
      <div className='mb-4'>
        <label className='text-2xl block text-white font-bold' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='w-full px-3 py-2 border rounded'
          required
        />
      </div>
      <div className='mb-4'>
        <label className='text-2xl block text-white font-bold' htmlFor='message'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          className='w-full px-3 py-2 border rounded'
          rows={5}
          required
        />
      </div>
      <div className='flex justify-center items-center'>
        <button
          disabled={loading}
          type='submit'
          className={`text-2xl flex justify-center gap-x-4 bg-slate-700 px-4 py-2 font-proxima_nova text-white ${loading ? 'opacity-40' : 'opacity-100'}`}
        >
          {loading && <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />}
          Submit
        </button>
      </div>
    </form>
  )
}
export default ContactForm
