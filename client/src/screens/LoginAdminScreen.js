import React,{useEffect,useState} from 'react';
import AdminSlider from '../slider/AdminSlider';
import { useDispatch,useSelector } from 'react-redux';
import {loginAdmin} from '../actions/adminAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const LoginAdminScreen = () => {
      const [officialname,setOfficialName] = useState('');
      const [password,setPassword] = useState('');
      const [organization,setOrganization] = useState('');
      const [organizationnumber,setOrganizationNumber] = useState('');
      const [officialemail,setOfficialEmail] = useState('');
      const [city,setCity] = useState('');
      const [domain,setDomain] = useState('');
      const dispatch = useDispatch();
    
      const loginAdminState = useSelector(state => state.loginAdminReducer);
      const {error,success,loading} = loginAdminState;
      
      useEffect(() => {
        if(localStorage.getItem('currentAdmin')){
          window.location.href = '/';
        }
      },[])
    
      const loginAdminHandler = (event) => {
        window.scrollTo({top:0,behavior:"smooth"});
        event.preventDefault();
        const admin = {officialname,password,organization,organizationnumber,officialemail,city,domain};
        dispatch(loginAdmin(admin));
      }

  return (<>
      {loading && <Loader />}
      {success && <Success success="Admin Login Successfully" />}
      {error && <Error error="Something Went Wrong"/>}
      <div className='bg-teal-900 flex md:flex-row flex-col h-full justify-between items-center px-4 py-10 md:p-20 my-10'>
      <div className=' flex flex-col md:gap-14 gap-10 md:py-14 pb-10 justify-center items-center w-full md:w-2/5'>
      <div className='flex gap-14 justify-center items-center'>
      <img src='../images/Admin-white.png' alt='Patient Icon' 
               className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-md shadow-gray-400 border-white/10 fill-white w-1/4 ' />
       <h1 className='text-5xl text-white font-black hover:mix-blend-overlay'>Admin</h1>
      </div>
      <AdminSlider />
      </div>
      <div className='h-full w-full backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 md:px-20 md:py-14 px-4 py-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl md:w-1/2'>
         
         <h1 className='text-white text-center text-5xl font-black hover:text-[#269c94]'>Sign in</h1>
         <form>
                 
                 <div className='md:mt-14 mt-10'>
                 <input type='text' placeholder='Official Name' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={officialname}
                        onChange={(e) => setOfficialName(e.target.value)}
                  />
                 </div>
                   
                 <div className='mt-5'>
                 <input type='password' placeholder='Password' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='Organization Under Which You Work' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='number' placeholder='Enter The Organization Unique Number' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={organizationnumber}
                        onChange={(e) => setOrganizationNumber(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='Official Email' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={officialemail}
                        onChange={(e) => setOfficialEmail(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='City' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='Domain' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                  />
                 </div>
                 <div className='mt-5 flex justify-start items-center w-full'>
                 <input type='checkbox' 
                        className='border-solid border-x-2 rounded-3xl border-y-2 border-teal-900'
                  />
                 <span className='ml-2 text-white'>
                    I accept the <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Terms of Use</a> & <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Privacy Policy</a>
                 </span>
                 </div>
                 <div className='md:mt-14 mt-8'>
                    <button className='w-full bg-white rounded-3xl shadow-sm shadow-gray-400 font-black hover:bg-teal-900 hover:text-white py-3 text-center text-teal-900'
                       onClick={(event) => loginAdminHandler(event)}   >Login account</button>
                 </div>
               </form>
      </div>
   </div>
   </>
  )
}

export default LoginAdminScreen
