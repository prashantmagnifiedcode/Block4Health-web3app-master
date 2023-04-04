import React,{useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [togReg, setTogReg] = useState(false);
  const [togLog, setTogLog] = useState(false);

  const CloseDownRegister = () => {
    if(togLog === true){
      window.scrollTo({top:0});
      window.scrollTo({top:700,behavior:"smooth"});
      setTogLog(false);
    }
    if (togReg === false) {
      window.scrollTo({top:700,behavior:"smooth"});
      setTogReg(true);
    } else {
      window.scrollTo({top:0,behavior:"smooth"});
      setTogReg(false);
    }
  };

  const CloseDownLogin = () => {
   
    if(togReg === true){
      window.scrollTo({top:0});
      window.scrollTo({top:700,behavior:"smooth"});
      setTogReg(false);
    }
    if (togLog === false) {
      window.scrollTo({top:700,behavior:"smooth"});
      setTogLog(true);
    } else {
      window.scrollTo({top:0,behavior:"smooth"});
      setTogLog(false);
    }
  };

  const CheckOpenClose = () => {
    window.scrollTo({top:0,behavior:"smooth"});
    if(togReg === true){
      window.scrollTo({top:0,behavior:"smooth"});
      setTogReg(false);
    }
    if(togLog === true){
      window.scrollTo({top:0,behavior:"smooth"});
      setTogLog(false);
    }
  }

  const handleClick = () => {
    window.scrollTo({top:700,behavior:"smooth"});
  }

  const controlClickRegister = () => {
    window.scrollTo({top:600,behavior:"smooth"});
  }

  const controlClick = () => {
    window.scrollTo({top:550,behavior:"smooth"});
  }

  const controlClickLogin = () => {
    window.scrollTo({top:670,behavior:"smooth"});
  }

  const controlClickAdmin = () => {
    window.scrollTo({top:625,behavior:"smooth"});
  }

  return (
    <>
      <div className='w-full flex flex-col relative bg-light6 md:h-full h-min overflow-hidden border-solid border-b-2 border-r-2 border-teal-900 md:rounded-br-[300px]
                      rounded-br-[100px] justify-between md:gap-10 ' > 

         <div className='w-full flex items-start'>
              <div className='flex md:px-20 p-4 justify-between items-center w-full '>
                <img className='md:w-48 w-36 p-0' src='../images/b4hlogo.png' alt='Logo'/>
                <div className='w-min flex justify-end'>
              <ul className='text-teal-900 md:flex hidden gap-6 list-none flex-row justify-center items-start'>
                  <NavLink to='/' end
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  > 
                  <li className=' cursor-pointer text-2xl font-black hover:text-light2' onClick={controlClick}>Home</li>
                  </NavLink>
                  <NavLink to='/about'
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  >
                  <li
                    className='  cursor-pointer text-2xl font-black hover:text-light2'
                  >
                  About
                  </li>
                  </NavLink>
                  <NavLink to='/contact'
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  >
                  <li className='  cursor-pointer text-2xl font-black hover:text-light2'>Contact</li>
                  </NavLink>
                  <NavLink to='/service'
                    className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  >
                  <li className='  cursor-pointer text-2xl font-black hover:text-light2'>Service</li>
                  </NavLink>

                <NavLink to='/register'
                   className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  >
                  <li className='group relative inline-block cursor-pointer text-2xl font-black hover:text-light2' 
                       >
                  <button onClick={controlClickRegister} className='inline-flex outline-none pb-2 focus:outline-none' >
                 Register
                  </button>
                  <div className='bg-teal-900 border-solid border-2 border-white/10 shadow-gray-400/50 shadow-md rounded absolute p-3 w-28 hidden group-hover:block'>
                      <ul className='text-white'>
                        <NavLink to='/register/registerpatient'
                              // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                        >
                          <li className='cursor-pointer text-xl font-black hover:text-light2' onClick={controlClickRegister}>Patient</li>
                        </NavLink>
                        <NavLink to='/register/registerdoctor'
                              // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                        >
                          <li className='cursor-pointer text-xl mt-1 font-black hover:text-light2' onClick={controlClickRegister}>Doctor</li>
                        </NavLink>
                      </ul>
                  </div>
                  </li>
                  </NavLink>
                  <NavLink to='/login'
                   className={({ isActive }) => isActive ? 'text-light2 font-bold' : null }
                  >
                  <li className=' group relative inline-block cursor-pointer text-2xl font-black hover:text-light2' 
                       >
                  <button className='inline-flex outline-none pb-2 focus:outline-none' onClick={controlClickLogin}>Login</button>
                  <div className='bg-teal-900 border-solid border-2 border-white/10 shadow-gray-400/50 shadow-md rounded absolute p-3 w-28 hidden group-hover:block'>
                      <ul className='text-white'>
                      <NavLink to='/login/loginpatient'
                              // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                        >
                          <li className='cursor-pointer text-xl font-black hover:text-light2' onClick={controlClickLogin}>Patient</li>
                        </NavLink>
                        <NavLink to='/login/logindoctor'
                              // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                        >
                          <li className='cursor-pointer text-xl mt-1 font-black hover:text-light2' onClick={controlClickLogin}>Doctor</li>
                        </NavLink>
                        <NavLink to='/login/loginadmin'
                              // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                        >
                          <li className='cursor-pointer text-xl mt-1 font-black hover:text-light2' onClick={controlClickAdmin}>Admin</li>
                        </NavLink>
                      </ul>
                  </div>
                  </li>
                  </NavLink>
                  


               </ul> 

               
               <div className="flex relative">
    {!menu && (
      <HiMenuAlt4 fontSize={28} className="bg-teal-900 rounded fill-white md:hidden cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && ( 
          <ul
            className="z-10 bg-dark1/60 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose className='stroke-2' onClick={() => setMenu(false)} /></li>
            <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]' onClick={CheckOpenClose}>Home</li>
            </NavLink>
            <NavLink to='/about'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]' onClick={CheckOpenClose}>About</li>
            </NavLink>
            <NavLink to='/contact'
                className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]' onClick={CheckOpenClose}>Contact</li>
            </NavLink>
            <NavLink to='/service'
                className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]' onClick={CheckOpenClose}>Service</li>
            </NavLink>

            <NavLink to='/register'
                className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
              <li className='my-2 text-lg mx-4 font-semibold cursor-pointer text-center hover:text-[#35b6b4]' onClick={CloseDownRegister}>Register</li>
              {togReg && (
                <div className='bg-light2 p-4 w-[70vw]'>
                <ul className='flex flex-col items-center text-white'>
                  <NavLink to='/register/registerpatient'>
                    <li className='my-2 hover:text-teal-900' onClick={handleClick}>Patient</li>
                  </NavLink>
                  <NavLink to='/register/registerdoctor'>
                    <li className='my-2 hover:text-teal-900' onClick={handleClick}>Doctor</li>
                  </NavLink>
                </ul>
              </div>
              )}
            </NavLink>

            <NavLink to='/login'
                className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer text-center hover:text-[#35b6b4]' onClick={(CloseDownLogin)}>Login</li>
              {togLog && (
                <div className='bg-light2 p-4 w-[70vw]'>
                <ul className='flex flex-col items-center text-white'>
                  <NavLink to='/login/loginpatient'>
                    <li  className='my-2 hover:text-teal-900' onClick={handleClick}>Patient</li>
                  </NavLink>
                  <NavLink to='/login/logindoctor'>
                    <li className='my-2 hover:text-teal-900' onClick={handleClick}>Doctor</li>
                  </NavLink>
                  <NavLink to='/login/loginadmin'>
                    <li className='my-2 hover:text-teal-900' onClick={handleClick}>Admin</li>
                  </NavLink>
                </ul>
              </div>
              )}
            </NavLink>
          </ul>
        )}
    </div> 
      </div>
      </div>
      </div>

      <div className='flex md:flex-row flex-col md:px-20'>
              <div className='flex flex-col justify-start pb-5 md:items-start items-center w-full gap-5 md:gap-10 '>
                <h1 className='text-teal-900 font-semibold hover:text-light2'>BLOCK4HEALTH</h1>
                <h1 className='text-teal-900 font-black text-center text-6xl hover:text-light2'>Own Your <span className='text-center'>Health</span></h1>
                <h1 className='md:text-left text-center text-md'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                    sunt nostrud amet.
                </h1>
                <button className='cursor-pointer hover:bg-light2 bg-teal-900 text-white p-2 md:w-1/4 w-1/2 rounded-[20px]'>How It Works</button>
              </div>

              <div className='flex justify-end'>
                   <img className='w-4/5' src='../images/banner.png' alt='banner'/>
                </div>
      </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar

