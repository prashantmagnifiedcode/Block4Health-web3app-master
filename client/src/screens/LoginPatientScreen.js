import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import PatientSlider from '../slider/PatientSlider';
import {FaSignInAlt} from 'react-icons/fa';
import { useDispatch,useSelector } from 'react-redux';
import {loginPatient} from '../actions/patientAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';
import {openwallet} from '../utils/metafunction'
// import {registerpatient} from '../utils/Register'
import MetaButton from './metaloginbutton'
const LoginPatientScreen = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [Meta,setMeta] = useState(false);
  const [MetaAccount,setMetaAccount] = useState('');
  const [MetaPrivateKey,setMetaPrivateKey] = useState('');
  const dispatch = useDispatch();

  const loginPatientState = useSelector(state => state.loginPatientReducer);
  const {error,success,loading} = loginPatientState;
  
  useEffect(() => {
    if(localStorage.getItem('currentPatient')){
      window.location.href = '/';
    }
  },[])

  const loginPatientHandler = (event) => {
    window.scrollTo({top:0,behavior:"smooth"});
    event.preventDefault();
    const patient = {MetaAccount,MetaPrivateKey};
    dispatch(loginPatient(patient));
  }


  ///blockchain part
  
//   const openwallet=()=> {
//     load()
//     loadblockchain()
//   }
//   const load=async()=>{
        
//     if(window.ethereum) {
//       window.web3 = new Web3(window.ethereum)
//       await window.ethereum.enable()
     
// }
// else if (window.web3) {
//   window.web3 = new Web3(window.web3.currentProvider)
  
// }
// else {
//   window.alert('non Ethereum browser detected. Dowload Metamask')
// }

// }
// const loadblockchain=async()=>{
//   const web3 = window.web3
//   const accounts = await web3.eth.getAccounts()
//   const networkId = await web3.eth.net.getId()
//   const networkData = Block4Health.networks[networkId]
 
//     if(networkData){
//             const instance= new web3.eth.Contract(Block4Health.abi,networkData.address);
//              console.log(instance.methods)
//      } 

// }
  return (<>
    {loading && <Loader />}
    {success && <Success success="Patient Login Successfully" />}
    {error && <Error error="Something Went Wrong"/>}
   <div className='bg-teal-900 flex md:flex-row flex-col h-full justify-between items-center px-4 py-10 md:p-20 my-10'>
   <div className=' flex flex-col md:gap-14 gap-10 md:py-14 pb-10 justify-center items-center w-full md:w-2/5'>
   <div className='flex gap-14 justify-center items-center'>
   <img src='../images/Patient-white.png' alt='Patient Icon' 
            className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-md shadow-gray-400 border-white/10 fill-white w-1/4 ' />
    <h1 className='text-5xl text-white font-black hover:mix-blend-overlay'>Patient</h1>
   </div>
   <PatientSlider />
    <div className='flex flex-col border-solid border-2 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10  gap-4 p-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl'>
      <h1 className='text-white'>Not a member?</h1>
      <NavLink to='/register/registerpatient'>
      <div className='flex gap-4 justify-center items-center'>
      <button className='flex justify-center bg-white shadow-sm font-black text-teal-900 shadow-gray-400 hover:text-white hover:bg-teal-900 py-2 px-4 rounded-3xl items-center w-full '>
      Sign up
      </button>
      <FaSignInAlt  className='fill-white text-2xl'/>
      </div>
      </NavLink>
    </div>
   </div>
      
   <div className='h-full w-full backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 md:px-20 md:py-14 px-4 py-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl md:w-1/2'>
      
          
            
                   
                   
                   <form>
              
                   <div className='md:mt-14 mt-10'>
                   <input type='text' placeholder='Private Key' 
                          className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                          value={MetaPrivateKey}
                          onChange={(e) => setMetaPrivateKey(e.target.value)}
                    />
                   </div>
                     
                   <div className='mt-5 flex justify-between items-center'>
                    <div className='w-1/2'>

                   <input type='text' placeholder='Account Number' 
                          className='border-solid border-2 shadow-sm text-xs shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                          value={MetaAccount}
                          readOnly
                          
                    />
                    
                    </div>
                   <MetaButton onPress={openwallet} setMeta={setMeta} setMetaAccount={setMetaAccount} />
                   
                   </div>
                
                   <div className='md:mt-14 mt-8'>
                   <div className='mt-5 flex justify-center'>
                   <button type="submit"
                   onClick={(e)=>loginPatientHandler(e)}
                   class="text-gray-900 bg-gradient-to-r from-red-200 via-blue-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
                   </div>
                   </div>
                 </form>
  
   </div>
</div>
</>
  )
}

export default LoginPatientScreen
