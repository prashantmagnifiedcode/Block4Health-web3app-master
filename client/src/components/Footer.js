import React from 'react'
import {AiFillFacebook,AiFillTwitterSquare,AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className='flex items-center relative md:h-16 h-20 flex-col'>
          <div className='bg-teal-900 md:w-1/2 w-5/6 rounded-3xl flex md:p-8 p-5 justify-center h-96 border-white/50 shadow-md shadow-white'>
              <div className='flex md:flex-row flex-col w-full gap-2 justify-between'>
              <div className='flex md:items-center justify-center'>
                <h1 className=' text-3xl text-white hover:text-light2'>B4H Healthcare</h1>
              </div>
              <div className='flex items-center'>
              <form className=' w-full'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                   <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                    <input type="search" id="default-search" className="block p-4 pl-10 w-full md:w-96 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Doctor, Hospital ..." required/>                
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-dark1 hover:bg-light1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-light2 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>
              </div>
              </div> 
          </div>
      </div>  
          <div className='flex flex-col bg-light2 justify-center pt-14'>
             <div className='flex md:flex-row flex-col gap-10 md:justify-between items-center pt-10 pb-8'>
             <div className=' flex flex-col items-center justify-center w-full md:w-1/3'>
              <h1 className="text-6xl font-black color1">Own Your</h1>
              <h1 className='text-6xl font-black color2'>Health</h1>
             </div>
             <div className='h-full md:w-2/3 w-11/12 flex justify-around items-start border-solid border-2 backdrop-blur-sm bg-gradient-to-tr from-white/10 via-white/10 to-white/20
                p-10 shadow-md shadow-teal-900/50 border-teal-900/10 rounded-3xl md:rounded-l-3xl'>
                 <div className='flex flex-col gap-4'>
                    <h1 className='text-teal-900 text-2xl font-bold hover:text-white'>Patient</h1>
                    <ul className='list-none'>
                    <li>Academics</li>
                    <li>Academics - Doctors</li>
                    <li>Academics - Certificates</li>
                    <li>DNB Programmes</li>
                    <li>Fellowship Programmes </li>
                    <li>Nursing/Allied Healthcare</li>
                    <li>Bespoke Trainings</li>
                    <li>Our Alumni</li>
                    <li>Observerships</li>
                  </ul>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='text-teal-900 text-2xl font-bold hover:text-white'>Doctor</h1>
                    <ul className='list-none'>
                    <li>Cancer Care </li>
                    <li>Cardiac Sciences</li>
                    <li>Neuro Sciences</li>
                    <li>Orthopaedics</li>
                    <li>Kidney Transplant</li>
                    <li>Bone Marrow Transplant</li>
                    <li>Nephrology</li>
                    <li>Health Checkup Plans</li>
                    <li>Eye Care</li>
                    <li>Robotic Surgery</li>
                  </ul>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='text-teal-900 text-2xl font-bold hover:text-white'>Admin</h1>
                    <ul className='list-none'>
                    <li>Chemotherapy</li>
                    <li>LVAD</li>
                    <li>Robotic Heart Surgery</li>
                    <li>Kidney Transplant</li>
                    <li>Lung Transplant</li>
                    <li>HIPEC</li>
                    <li>Valvular Heart Surgery</li>
                    <li>ECMO</li>
                    <li>Baraitric Surgery</li>
                    <li>Cochlear Implant</li>
                  </ul>
                  </div>
             </div>
             </div>
             <div className='flex-[0.9] flex md:flex-row flex-col md:pb-4 pb-7 gap-4 justify-between items-center px-8' >
             <span className='text-teal-900 font-bold text-lg hover:text-white'>All Rights Reserved</span>
            <span className='text-teal-900 font-bold text-lg hover:text-white'>Terms - Privacy Policy</span>
            <div className='text-teal-500'>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-teal-900 md:mx-1.5 mx-2.5 text-xl hover:text-teal-900 hover:bg-white
            duration-300'> 
           <AiFillFacebook />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-teal-900 md:mx-1.5 mx-2.5 text-xl hover:text-teal-900 hover:bg-white
            duration-300'> 
           <AiFillTwitterSquare />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-teal-900 md:mx-1.5 mx-2.5 text-xl hover:text-teal-900 hover:bg-white
            duration-300'> 
           <AiFillGithub />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-teal-900 md:mx-1.5 mx-2.5 text-xl hover:text-teal-900 hover:bg-white
            duration-300'> 
           <AiFillLinkedin />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-teal-900 md:mx-1.5 mx-2.5 text-xl hover:text-teal-900 hover:bg-white
            duration-300'> 
           <AiFillInstagram />
            </span>
               </div>
             </div>
          </div>
    </>
  )
}

export default Footer
