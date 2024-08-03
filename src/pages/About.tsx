import { woman } from '@src/assets/images'

const About = () => {
  const owner = woman

  return (
    <div className='flex justify-center items-center flex-col'>
      <header>
        <h1 className='text-6xl flex justify-center items-center'>Who am I?</h1>
        <h2 className='flex justify-center items-center text-xl'>Skyla Ranger</h2>
        <img className='object-cover aspect-square w-fit' src={owner} alt='Skyla Ranger photo' />
      </header>
      <hr className='m-3 bg-slate-600 w-full' />
      <section className='flex flex-col justify-center items-center w-2/3 text-lg text-gray-600'>
        <p className='my-2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quibusdam dolorum sunt
          fugiat dicta labore impedit ipsa blanditiis laudantium? Corrupti qui hic libero voluptas
          alias neque illo blanditiis nisi consequuntur?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Odit, fugiat veritatis! Nam voluptates perspiciatis officia, provident,
          dicta non optio debitis accusantium, magnam reprehenderit impedit ratione. Quos in
          corporis cum voluptatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className='my-2'>
          Libero minima veniam sapiente officiis quia at nemo voluptatem fugiat ut assumenda
          voluptas nihil laudantium in, hic, qui harum voluptate quam vitae. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Tempore voluptatem, accusamus officia molestiae
          quisquam veritatis deserunt unde? Velit aspernatur eius tempore cumque, distinctio nam
          inventore, quibusdam hic, itaque asperiores vel? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro iste explicabo nihil ex pariatur cum, repellendus alias provident
          ducimus eum adipisci labore ratione. Vitae repellat amet quisquam minima, sit laudantium?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptate repellendus
          aut, quaerat eaque exercitationem. Delectus, ipsum. Explicabo laudantium enim magnam
          itaque.
        </p>
        <p className='my-2'>
          Voluptates impedit nobis voluptatum dignissimos nihil dolore! Cupiditate! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Earum, veniam odio quia optio consectetur
          quisquam qui suscipit fuga reiciendis. Tempore, laborum hic! Necessitatibus delectus fugit
          magni ut, et natus nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo voluptates iste eos rem sequi. Debitis, aperiam odit! Reprehenderit pariatur,
          qui consectetur veniam fuga, dolor, perspiciatis voluptas temporibus eius necessitatibus
          voluptatibus.
        </p>
      </section>
    </div>
  )
}
export default About
