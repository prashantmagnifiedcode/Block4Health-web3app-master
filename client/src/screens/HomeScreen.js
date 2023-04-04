import React from 'react';
import B4hStatistics from './B4hStatistics';
import EventSlider from './EventSlider';

const HomeScreen = () => {
  return (
    <>
    <B4hStatistics />
      <div className='flex my-10 md:my-20 justify-center'>
           <div className='flex-[0.9] flex md:flex-row flex-col justify-between gap-4 md:gap-0'>

              <div className='md:w-1/2 md:h-full h-52 w-full'>
              <iframe className='md:w-[560px] w-full h-full rounded-3xl' src="https://www.youtube.com/embed/cxsZcgd_LYg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

              <div className=' md:w-1/2 w-full md:p-0 p-4 flex flex-col items-center md:items-start justify-start gap-6'>
                 <h1 className='font-bold text-4xl text-teal-900 hover:text-light2 md:text-left text-center'>Our Technology In Action</h1>
                 <h1 className='md:text-left text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor
do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet.</h1>
                 <h1 className='md:text-left text-center'>Amet minim mollit non deserunt ullamco</h1>
                 <h1 className='md:text-left text-center'>Amet minim mollit non deserunt ullamco</h1>
                 <h1 className='md:text-left text-center'>Amet minim mollit non deserunt ullamco</h1>
                 <button className='bg-teal-900 hover:bg-light2 text-white rounded-full p-2 w-1/2 md:w-1/4'>How To Learn</button>
              </div>
           </div>
      </div>
      <EventSlider />
    </>
  )
}

export default HomeScreen
