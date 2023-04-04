import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutDoctor} from '../actions/doctorAction';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const DoctorNavbar = () => {
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div className='bg-light6'>
           <div className='flex justify-between md:px-20 p-4'>
              <img className='md:w-48 w-36' src='../images/b4hlogo.png' alt='Logo'/>
              <div className=' flex items-center'>
              <ul className='text-teal-900 md:flex hidden gap-6'>
                  <NavLink to='/' end
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  > 
                  <li className=' cursor-pointer text-2xl font-black hover:text-light2'>Dashboard</li>
                  </NavLink>
                  <NavLink to='/addviewehr'
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  > 
                  <li className=' cursor-pointer text-2xl font-black hover:text-light2'>EHR</li>
                  </NavLink>
                  <NavLink to='/viewehr'
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  > 
                  <li className=' cursor-pointer text-2xl font-black hover:text-light2'>View EHR</li>
                  </NavLink>
                  <li className=' cursor-pointer text-2xl font-black hover:text-light2' onClick={() => {dispatch(logoutDoctor())}}>Logout</li>
              </ul>

              <div className="flex relative">
    {!menu && (
      <HiMenuAlt4 fontSize={28} className="bg-teal-900 rounded fill-white md:hidden cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && ( 
          <ul
            className="z-10 bg-dark1/60 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose className='stroke-2' onClick={() => setMenu(false)} /></li>
            <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Dashboard</li>
            </NavLink>
            <NavLink to='/addviewehr'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>EHR</li>
            </NavLink>
            <NavLink to='/viewehr'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>View EHR</li>
            </NavLink>
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]' onClick={() => {dispatch(logoutDoctor())}}>Logout</li>
          </ul>
        )}
    </div> 

           </div>
           </div>
      </div>
    </>
  )
}

export default DoctorNavbar
