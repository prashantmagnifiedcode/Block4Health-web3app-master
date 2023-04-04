import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllDoctors,doctorGrant,doctorRevoke} from '../actions/doctorAction';
import Loader from '../components/Loader';
import Error from '../components/Error';

const DoctorsAccessList = () => {

    const doctorState = useSelector(state => state.getAllDoctorsReducer);
    const {loading,error,doctors} = doctorState;

    const patientState = useSelector(state => state.loginPatientReducer);
    const {currentPatient} = patientState;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllDoctors());
    },[dispatch]);

  return (<>
    {loading && (<Loader />)}
    {error && (<Error error='Error While Fetching Doctors'/>)}
    <div className='flex flex-col md:p-20 md:gap-20 gap-10 py-10'>
      <h1 className='text-5xl text-teal-900 font-black text-center hover:text-light2'>Doctor List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Doctor Id
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Doctor Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Doctor Email
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Access
                </th>
            </tr>
        </thead>

        <tbody>
        {doctors && doctors.map(doctor => (
          <tr key={doctor._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{doctor._id}</th>
             <td className="px-6 py-4">{doctor.fname} {doctor.lname}</td>
             <td className="px-6 py-4">{doctor.email}</td>
             <td className="px-6 py-4 space-x-4 flex items-center"> 
             {doctor.isGrant.includes(currentPatient._id) ?
             (<h6 className='text-teal-900 font-semibold'>Granted</h6>) : (
              <>
              <button className='bg-teal-600 hover:bg-teal-800 py-2 px-4 rounded-full text-white'
              onClick={() => {dispatch(doctorGrant(doctor._id,currentPatient._id))}}>Grant</button> 
              </>
            )}
             {doctor.isGrant.includes(currentPatient._id) ?
             (<>
              <button className='bg-red-600 hover:bg-red-800 py-2 px-4 rounded-full text-white'
              onClick={() => {dispatch(doctorRevoke(doctor._id,currentPatient._id))}}>Revoke</button> 
              </>) : (
                <h6 className='text-red-500 font-semibold'>Revoked</h6>
            )}
             </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default DoctorsAccessList
