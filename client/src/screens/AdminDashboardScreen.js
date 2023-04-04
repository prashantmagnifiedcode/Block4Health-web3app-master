// import React,{useEffect} from 'react';
import React from 'react';
// import {useSelector,useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
// import {connectWalletDoctor} from '../actions/doctorAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const AdminDashboardScreen = () => {

//   useEffect(() => {
    
//     if(window.ethereum) {
//       window.ethereum.on('chainChanged', () => {
//         dispatch(connectWalletDoctor());
//         setCurrAccount(currentAccount);
//       })
//       window.ethereum.on('accountsChanged', () => {
//         dispatch(connectWalletDoctor());
//         setCurrAccount(currentAccount);
//       })
//     }
//   },[])

  const adminState = useSelector(state => state.loginAdminReducer);
  const {currentAdmin} = adminState;

//   const adminAccountState = useSelector(state => state.connectMetamaskDoctorReducer);
//   const {error,success,loading,currentAccount} = adminAccountState;

//   const dispatch = useDispatch();
  
  // const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
     
  return (<>
    {/* {loading && <Loader />}
    {success && <Success success="Doctor Connected Metamask Account Successfully" />}
    {error && <Error error="Something Went Wrong"/>} */}
    <div className='md:my-20 my-10'>
      <div className='md:flex md:flex-row flex-col md:space-y-0 space-y-10 md:justify-center'>
          <div className='md:w-1/2 w-full md:px-0 px-4 flex justify-center'>
            <div className='bg-teal-900 text-white flex flex-col gap-10 py-10 rounded-3xl md:w-4/5 w-full items-center'>
              <h1 className='md:text-5xl text-4xl font-black'>Admin Portal</h1>
              <img src='../images/Admin-white.png' alt='Admin Icon' 
              className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-md shadow-gray-400 border-white/10 fill-white w-1/4 ' />
              <div className='w-full md:px-10 pl-4'>
              <h1>Official Name &nbsp;:&nbsp; {currentAdmin.officialname}</h1>
              <h1>Admin ID &nbsp;:&nbsp; {currentAdmin._id}</h1>
              <h1>Organization &nbsp;:&nbsp; {currentAdmin.organization}</h1>
              <h1>Organization No. &nbsp;:&nbsp; {currentAdmin.organizationnumber}</h1>
              <h1>Official Email &nbsp;:&nbsp; {currentAdmin.officialemail}</h1>
              <h1>City &nbsp;:&nbsp; {currentAdmin.city}</h1>
              <h1>Domain &nbsp;:&nbsp; {currentAdmin.domain}</h1>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col px-4 md:px-0 md:w-1/2 w-full justify-center gap-10 items-center'>
          <div className="flex bg-teal-900/70 backdrop-blur p-10 flex-col md:w-3/5 w-full items-center justify-center rounded-3xl">
           <div className="flex w-full justify-end items-start flex-col rounded-xl ">
              <div className="flex justify-between flex-col md:gap-28 gap-14 w-full">
                <div className="flex justify-between items-start">
                   <div className="rounded-full border-2 border-white flex justify-center items-center">
                   <SiEthereum className='text-2xl' color="#fff" />
                   </div>
                   <BsInfoCircle className='text-2xl' color="#fff" />
                </div>
                <div>
                <p className="text-white overflow-hidden font-light text-sm">
                {currentAccount}

                </p>
                <p className="text-white font-black text-xl">
                  Ethereum
                </p>
              </div>
              </div>
           </div>
           </div>
           <div className='w-1/2 flex justify-center'>
           {!currentAccount && (
             <button className='bg-teal-900 py-2 px-6 rounded-full text-white' onClick={() => {dispatch(connectWalletDoctor())}}>Connect Wallet</button>
           )}
           </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default AdminDashboardScreen

