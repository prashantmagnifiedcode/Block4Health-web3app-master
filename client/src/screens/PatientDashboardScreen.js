import React ,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import MyCalendar from "../components/MyCalendar";
import CommonTable from "../components/CommonTable";
import Avatar from '@mui/material/Avatar';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {connectWalletPatient} from '../actions/patientAction';
import {useDispatch} from 'react-redux';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const PatientDashboardScreen = () => {
  // const [openllistPopup,setOpenllistPopup]=useState(false)
  
  useEffect(() => {

    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        dispatch(connectWalletPatient());
        setCurrAccount(currentAccount);
      })
      window.ethereum.on('accountsChanged', () => {
        dispatch(connectWalletPatient());
        setCurrAccount(currentAccount);
      })
    }
  },[])

  const patientState = useSelector((state) => state.loginPatientReducer);
  const { currentPatient } = patientState;

  const patientAccountState = useSelector(state => state.connectMetamaskPatientReducer);
  const {error,success,loading,currentAccount} = patientAccountState;

  const dispatch = useDispatch();

  // const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

  return (
    <>
      {/* {loading && <Loader />}
    {success && <Success success="Patient Connected Metamask Account Successfully" />}
    {error && <Error error="Something Went Wrong"/>}
    <div classNameName='md:my-20 my-10'>
      <div className='md:flex md:flex-row flex-col md:space-y-0 space-y-10 md:justify-between'>
          <div className='md:w-1/2 w-full md:pl-20 md:px-0 px-4'>
            <div className='bg-teal-900 text-white flex flex-col gap-10 py-10 rounded-3xl md:w-4/5 w-full items-center'>
              <h1 className='md:text-5xl text-4xl font-black'>Patient Portal</h1>
              <img src='../images/Patient-white.png' alt='Patient Icon' 
              className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-md shadow-gray-400 border-white/10 fill-white w-1/4 ' />
              <div className='w-full md:px-10 px-4'>
              <h1>Patient Name &nbsp;:&nbsp; {currentPatient.fname} {currentPatient.lname}</h1>
              <h1>Patient ID &nbsp;:&nbsp; {currentPatient._id}</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-4 md:px-0 md:w-1/2 w-full justify-center gap-10 items-center'>
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
             <button className='bg-teal-900 py-2 px-6 rounded-full text-white' onClick={() => {dispatch(connectWalletPatient())}}>Connect Wallet</button>
           )}
           </div>
        </div>
      </div>
    </div> */}

      <div className="flex md:flex-row flex-col ">
        <div className="flex flex-col">

        <div className="grid grid-rows-2 px-3 py-10 gap-10">
          <div className="   bg-white  shadow-lg  rounded-lg  transform  duration-200 easy-in-out">
            <div className=" h-32 bg-light2 overflow-hidden "></div>
            <div className="flex justify-center px-5  -mt-12">
              <img
                className="h-32 w-32 bg-white p-2 rounded-full   "
                src="../images/tushar.jpg"
                alt=""
              />
              <div className=" absolute top-5 right-5 ">
                <button className="bg-teal-900 rounded-lg p-2 text-xs text-white ">
                  Edit Profie
                </button>
              </div>
            </div>
            <div>
              <div className="text-center px-14 py-2 ">
                <h2 className="text-gray-800 text-2xl font-bold">{currentPatient.fname} {currentPatient.lname}</h2>
                <p className="text-gray-400 mt-2"> {currentAccount}</p>
                <p className="mt-2 text-gray-600">
                  Lo rem Ipsum is simply dummy text of the printince the 1500s,{" "}
                </p>
              </div>
              <div className="flex justify-around mb-3 ">
                <button className="bg-teal-900 rounded-lg p-2 text-xs text-white ">
                  Edit Profie
                </button>
                <button className="bg-teal-900 rounded-lg p-2 text-xs text-white ">
                  Edit Profie
                </button>
              
                {!currentAccount && (
             <button className='bg-teal-900 rounded-lg p-2 text-xs text-white' onClick={() => {dispatch(connectWalletPatient())}}>Connect Wallet</button>
           )
           
           }
                {currentAccount && (
             <button className='bg-teal-900 rounded-lg p-2 text-xs text-white' onClick={() => location.reload()}>Disconnect Wallet</button>
           )
           
           }
              </div>
            </div>
          </div>

          <div className="shadow-lg  transform  duration-200 easy-in-out">
            <div className="py-2 bg-light2 overflow-hidden flex justify-around items-center">
              <p className="text-white">My Virtual Sign</p>
              <button className="bg-teal-900 rounded-lg p-3 text-white">View All</button>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 px-3 py-10 gap-10">
          <div className="   bg-white  shadow-lg    transform   duration-200 easy-in-out">
            <div className=" h-12 bg-light2 overflow-hidden  flex justify-around items-center">
              <p className="text-white">Calendar</p>
              <button className="bg-teal-900 rounded-lg p-2 text-xs text-white">
                Go to Calendar
              </button>
            </div>

            <MyCalendar />

            <div className="mt-3 ">
              <div className=" h-12 bg-light2 overflow-hidden  flex justify-around items-center">
                <p className="text-white">Upcoming Appointment</p>
              </div>
            </div>
          </div>
        </div>
        </div>
{/* 
        <div className="grid grid-rows-2 px-3 py-10 gap-10">
          <div className="   bg-white  shadow-lg    transform   duration-200 easy-in-out">
            <div className=" h-12 bg-light2 overflow-hidden  flex justify-around items-center">
              <p className="text-white">Calendar</p>
              <button className="bg-teal-900 rounded-lg p-2 text-xs text-white">
                Go to Calendar
              </button>
            </div>

            <MyCalendar />

            <div className="mt-3 ">
              <div className=" h-12 bg-light2 overflow-hidden  flex justify-around items-center">
                <p className="text-white">Upcoming Appointment</p>
              </div>
            </div>
          </div>
        </div> */}
{/* 
        <div className="grid grid-rows-2 px-3 py-10">
          <div className="   bg-white  rounded-lg shadow-lg   transform   duration-200 easy-in-out">
            <div className=" h-12 bg-light2 overflow-hidden   flex justify-around items-center">
              <p className="text-white">My Favorite Practitioners</p>
              <button className="bg-teal-900 rounded-lg p-2 text-xs text-white">
                view all
              </button>
            </div>

            <div className="p-2">
              <div className="flex justify-between p-2 items-center bg-light1 w-full h-10 rounded-lg mt-1 ">
                <div className="flex items-center w-full">
                <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 24, height: 24 }}
                    className="mr-2"
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                  />
                  <p className="text-white">prashant srivastava</p>
                </div>

                <div>
                  <VideoCameraFrontIcon />
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex justify-between p-2 items-center bg-light1 w-full h-10 rounded-lg mt-1 mt-1">
                <div className="flex items-center w-full">
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 24, height: 24 }}
                    className="mr-2"
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                  />
                  <p className="text-white">prashant srivastava</p>
                </div>

                <div>
                  <VideoCameraFrontIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="   bg-white  rounded-lg shadow-lg   transform   duration-200 easy-in-out">
            <div className=" h-12 bg-light2 overflow-hidden   flex justify-around items-center">
              <p className="text-white">My Panel & Insurance</p>
              <button className="bg-teal-900 rounded-lg p-2 text-xs text-white">
                view all
              </button>
            </div>

            <CommonTable />
          </div>
        </div> */}
            <CommonTable />

      </div>

    </>
  );
};

export default PatientDashboardScreen;
