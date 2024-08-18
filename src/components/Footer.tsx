type FooterProps = {
  name: string
}

const Footer = ({ name }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='flex w-screen bg-zinc-300 justify-center items-end mt-4'>
      <p className='text-center font-mono font-light tracking-wide text-neutral-700'>
        {name} {currentYear}
      </p>
    </footer>
  )
}

export default Footer
