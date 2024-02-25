import { Image } from "../../../types"

const images: Image[] = [
  {img : "https://html5up.net/uploads/demos/astral/images/pic01.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic02.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic03.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic04.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic05.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic06.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic07.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic08.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic09.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic10.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic11.jpg"},
  {img : "https://html5up.net/uploads/demos/astral/images/pic12.jpg"},
]

const Folder = () => {

  return (
    <div className='text-black mx-1 p-4 sm:p-10 md:p-4 bg-white md:mx-8 lg:flex flex-col lg:mx-20 lg:justify-end xl:mx-44'>
        <div className='p-6 text-center lg:p-12 lg:pb-0 '>
          <h1 className='text-2xl font-normal text-start mb-3 lg:text-4xl'>Work</h1>
          <p className='text-base pt-2 text-slate-300 text-start font-normal leading-7 lg:text-lg'>Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.</p>
      </div>
       <div className="grid grid-cols-auto-fit gap-2 lg:p-8 lg:gap-0">
    
        {images.map((image,index) => (
          <img key={index} src={`${image.img}`} className="rounded-lg w-full h-auto px-2 mb-6 lg:mb-4 lg:p-3 "/>
         ))}
      </div>
    </div>
  )
}

export default Folder