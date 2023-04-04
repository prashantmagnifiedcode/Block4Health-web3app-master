import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllDoctors} from '../actions/doctorAction';
import {getAllPatients} from '../actions/patientAction';

const B4hStatistics = () => {
  const doctorState = useSelector(state => state.getAllDoctorsReducer);
  const {doctors} = doctorState;
  const patientState = useSelector(state => state.getAllPatientsReducer);
  const {patients} = patientState;
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(getAllPatients());
  },[dispatch]);

  return (
    <div className='md:mt-20 mt-10 flex flex-col'>
      <div className='flex flex-col text-center items-center gap-4 px-4'>
      <h1 className='font-bold text-4xl statistic'>Block4Health Statistics</h1>
      <p>All Statistics About Users, Patients And Doctors Associated With System.</p>
      </div>
      <div className='flex justify-between md:px-60 px-6 py-4 md:pb-0 md:pt-10'>
      <div className='flex flex-col justify-center items-center'>
      <img src='../images/User-green.png' alt='Patient Icon' 
               className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-sm shadow-gray-400 border-teal-900/10 fill-white w-5/6 ' />
      <h1 className='text-4xl mt-2'>{patients.length + doctors.length}</h1>  
      <p className='font-semibold text-teal-900'>Users</p>
      </div>        
      <div className='flex flex-col justify-center items-center'>
      <img src='../images/Patient-green.png' alt='Patient Icon' 
               className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-sm shadow-gray-400 border-teal-900/10 fill-white w-5/6 ' />
      <h1 className='text-4xl mt-2'>{patients.length}</h1>
      <p className='font-semibold text-teal-900'>Patients</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img src='../images/Doctor-green.png' alt='Patient Icon' 
               className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-sm shadow-gray-400 border-teal-900/10 fill-white w-5/6 ' />
      <h1 className='text-4xl mt-2'>{doctors.length}</h1>
      <p className='font-semibold text-teal-900'>Doctors</p>
      </div>
      </div>
    </div>
  )
}

export default B4hStatistics
