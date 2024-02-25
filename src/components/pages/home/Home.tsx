const Home = () => {
  return (
    <div className='text-black mx-1 bg-white md:mx-8 lg:flex lg:mx-20 lg:justify-end xl:mx-44'>
      <div className='p-11 text-center md:p-24 lg:text-start  lg:p-10 lg:w-full lg:flex lg:flex-col lg:justify-center'>
        <h1 className='text-2xl font-normal md:text-5xl'>Jane Doe</h1>
        <p className='text-base pt-2 text-slate-300 md:text-xl'>Senior Astral Projectionist</p>
      </div>
      <img src={`https://html5up.net/uploads/demos/astral/images/me.jpg`} 
           className='w-full h-80 object-cover md:h-96 lg:h-full lg:w-80'
      />
    </div>
  )
}

export default Home