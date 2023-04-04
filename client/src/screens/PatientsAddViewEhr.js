import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllPatients} from '../actions/patientAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { NavLink } from 'react-router-dom';

const PatientsAddViewList = () => {

    const patientState = useSelector(state => state.getAllPatientsReducer);
    const {loading,error,patients} = patientState;

    const doctorState = useSelector(state => state.loginDoctorReducer);
    const {currentDoctor} = doctorState;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllPatients());
    },[dispatch]);

  return (<>
    {loading && (<Loader />)}
    {error && (<Error error='Error While Fetching Patients'/>)}
    <div className='flex flex-col md:p-20 md:gap-20 gap-10 py-10'>
      <h1 className='text-5xl text-teal-900 font-black text-center hover:text-light2'>Patient List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Patient Id
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Patient Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Patient Email
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  EHR
                </th>
            </tr>
        </thead>

        <tbody>
        {patients && patients.map(patient => (
          <tr key={patient._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{patient._id}</th>
             <td className="px-6 py-4">{patient.fname} {patient.lname}</td>
             <td className="px-6 py-4">{patient.email}</td>
             <td className="px-6 py-4">
             {patient.isGrant.includes(currentDoctor._id) ?
             (<h6 className='text-teal-900 text-xl font-semibold'>Granted</h6>) : (
              <>
              <h6 className='text-red-500 font-semibold'>Revoked</h6>
              </>
            )}
            </td>
            {patient.isGrant.includes(currentDoctor._id) ? (
              <td className="px-6 py-4 space-x-4 flex items-center">
              <NavLink to='/addehr'>
               <button className='bg-teal-600 hover:bg-teal-800 py-2 px-4 rounded-full text-white'>Add</button>
               </NavLink> 
               <button className='bg-red-600 hover:bg-red-800 py-2 px-4 rounded-full text-white'>View</button>
             </td>
            ) : (
              <td className="px-6 py-4 space-x-4 flex items-center">
               <button className='bg-teal-600/50 hover:bg-teal-800/70 py-2 px-4 rounded-full text-white'>Add</button> 
               <button className='bg-red-600/50 hover:bg-red-800/70 py-2 px-4 rounded-full text-white'>View</button>
             </td>
            )}
             
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default PatientsAddViewList
