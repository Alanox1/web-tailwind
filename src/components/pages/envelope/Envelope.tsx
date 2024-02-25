const Envelope = () => {
  return (
    <div className='text-black mx-1 bg-white md:mx-8 lg:mx-20 xl:mx-44 p-6 lg:py-16 lg:px-22 md:p-12'>

         <h1 className='text-xl mb-4 font-normal md:text-5xl lg:text-3xl '>Contact Me</h1>

         <div className="flex flex-col w-full h-auto gap-5">
          <div className="flex flex-col gap-4 lg:flex-row ">
            <input type="text" placeholder="Name" className="p-1 border-solid border-2 w-full bg-slate-500 bg-opacity-15 md:p-3" />
            <input type="email" placeholder="Email"  className="p-1 border-solid border-2 w-full bg-slate-500 bg-opacity-15 md:p-3"/>
          </div>
            
            <input type="text" placeholder="Subject" className="p-1 border-solid border-2 bg-slate-500 bg-opacity-15 md:p-3"/>
            <input type="text" placeholder="Message" className="p-20 border-solid border-2 lg:p-24 bg-slate-500 bg-opacity-15"/>
         
            <button className="bg-black text-white text-center p-3 md:py-5 md:px-10 md:w-48 md:my-6">
                    Send Message
            </button>
         </div>
         
    </div>
  )
}

export default Envelope