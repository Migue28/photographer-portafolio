import { SubmitHandler, useForm } from 'react-hook-form'

import { ContactFormData } from '@src/types/contact'

type ContactFormProps = {
  loading: boolean
  handleContactForm: (contactFormData: ContactFormData) => void
}

const ContactForm = ({ handleContactForm }: ContactFormProps) => {
  const { handleSubmit } = useForm<ContactFormData>()
  const onSubmit: SubmitHandler<ContactFormData> = (data) => handleContactForm(data)
  return <form onSubmit={handleSubmit(onSubmit)}></form>
}
export default ContactForm
