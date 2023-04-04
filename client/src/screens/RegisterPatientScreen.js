import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import PatientSlider from '../slider/PatientSlider';
import {FaSignInAlt} from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import {registerPatient} from '../actions/patientAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import {openwallet} from '../utils/metafunction'
import MetaButton from './metaloginbutton'

const RegisterPatientScreen = () => {
       
       const [Meta,setMeta] = useState(false);
       const [MetaAccount,setMetaAccount] = useState("");
       console.log(MetaAccount)
       const [fname,setFname] = useState('');
       const [lname,setLname] = useState('');
       const [email,setEmail] = useState('');
       const [phonenumber,setPhoneNumber] = useState('');
       const [age,setAge] = useState('');
       const [bloodgroup,setBloodGroup] = useState('');
       const [dob,setDOB] = useState('');
       const [address,setAddress] = useState('');
       const [country,setCountry] = useState('');
       const [state,setState] = useState('');
       const [city,setCity] = useState('');
       const [aadhaar,setAadhaar] = useState('');
       const [MetaPrivateKey,setMetaPrivateKey] = useState('');
       const [checkbox,setCheckbox] = useState(false);
       
      

                
       
       const registerPatientState = useSelector(state => state.registerPatientReducer);
       const {error,success,loading} = registerPatientState;

       const dispatch = useDispatch();
       
       const registerpatienthandler = async(e) => {
              window.scrollTo({top:0,behavior:"smooth"});
              e.preventDefault();
              if(!MetaAccount){
                     alert('Connect Metamask wallet Intially');
              }else if(!MetaPrivateKey){
                     alert('pls fill correct credentials');
              }
              else{
                     const patient = {fname,lname,email,phonenumber
                            ,age,bloodgroup,dob,address,country,state,city,aadhaar,MetaAccount,MetaPrivateKey};
                     dispatch(registerPatient(patient));

                     setFname('');
                     setLname('');
                     setEmail('');
                     setPhoneNumber('');
                     setAge('');
                     setBloodGroup('');
                     setDOB('');
                     setAddress('');
                     setCountry('');
                     setState('');
                     setCity('');
                     setAadhaar('');
                     setMetaPrivateKey('');
              
                     setCheckbox(false);
              }
       }

  return (
       <>
       {loading && <Loader />}
       {success && <Success success="Patient Registered Successfully" />}
       {error && <Error error="Something Went Wrong"/>}
   <div className='bg-teal-900 flex md:flex-row flex-col h-full justify-between px-4 py-10 md:p-20 my-10'>
      <div className=' flex flex-col md:gap-14 gap-10 md:py-14 pb-10 justify-center items-center w-full md:w-2/5'>
      <div className='flex gap-14 justify-center items-center'>
      <img src='../images/Patient-white.png' alt='Patient Icon' 
               className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-md shadow-gray-400 border-white/10 fill-white w-1/4 ' />
       <h1 className='text-5xl text-white font-black hover:mix-blend-overlay'>Patient</h1>
      </div>
      <PatientSlider />
       <div className='flex flex-col border-solid border-2 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10  gap-4 p-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl'>
         <h1 className='text-white'>Already a member?</h1>
         <NavLink to='/login/loginpatient'>
         <div className='flex gap-4 justify-center items-center'>
         <button className='flex justify-center bg-white shadow-sm font-black text-teal-900 shadow-gray-400 hover:text-white hover:bg-teal-900 p-2 rounded-3xl items-center w-full '>
         Sign in
         </button>
         <FaSignInAlt  className='fill-white text-2xl'/>
         </div>
         </NavLink>
       </div>
      </div>
      <div className='h-full w-full backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 md:px-20 md:py-14 px-4 py-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl md:w-1/2'>
         <h1 className='text-white text-center text-5xl font-black hover:text-[#269c94]'>Sign up</h1>
        
         
             
         <form>
                 <div className='grid md:mt-14 mt-10 grid-cols-2 gap-5 '>
                   <input type='text' placeholder='First Name'
                           className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50  px-4'
                           value={fname}
                           onChange={e => setFname(e.target.value)}
                     />
                   
                         <div className=' flex justify-center items-center'>
               <MetaButton onPress={openwallet} setMetaAccount={setMetaAccount} setMeta={setMeta}/>
                 </div>
                 </div>
                 {
                     Meta?
                 <div className='mt-5'>
                 <input type='text' placeholder='MetaAccount' value={MetaAccount} readOnly
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                    
                  />
                 </div>:null
                 }
                 <div className='mt-5'>
                 <input type='email' placeholder='Email' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                  />
                 </div>
                 <div className='mt-5 mb-5'>
                 <input type='tel' placeholder='Phone Number' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={phonenumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                  />
                 </div>
                 <div className='grid grid-cols-2 gap-5'>
                    <input type='text' placeholder='Age' 
                           className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4'
                           value={age}
                           onChange={e => setAge(e.target.value)}
                     />
                    <input type='text' placeholder='Blood Group' 
                           className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4'   
                           value={bloodgroup}
                           onChange={e => setBloodGroup(e.target.value)}
                    />
                 </div>
                 <div className='mt-5'>
                 <input type='tel' placeholder='Date Of Birth' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={dob}
                        onChange={e => setDOB(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='Address' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='Country' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='State' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={state}
                        onChange={e => setState(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='City' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='text' placeholder='Enter Your 12 Digit Aadhaar Pin' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={aadhaar}
                        onChange={e => setAadhaar(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='password' placeholder='Password' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={MetaPrivateKey}
                        onChange={e => setMetaPrivateKey(e.target.value)}
                  />
                 </div>
            
                
                 <div className='mt-5 flex justify-start items-center w-full'>
                 <input type='checkbox' checked={checkbox}
                        className='border-solid border-x-2 rounded-3xl border-y-2 border-teal-900'
                        onChange={e => setCheckbox(e.target.checkbox)}
                  />
                 <span className='ml-2 text-white'>
                    I accept the <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Terms of Use</a> & <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Privacy Policy</a>
                 </span>
                 </div>
                 <div className='md:mt-14 mt-8'>
                    <button className='w-full bg-white rounded-3xl shadow-sm shadow-gray-400 font-black hover:bg-teal-900 hover:text-white py-3 text-center text-teal-900'
                        onClick={registerpatienthandler}  >Create account</button>
                 </div>
               </form>
         
      </div>
   </div>
   </>
  )
}

export default RegisterPatientScreen
