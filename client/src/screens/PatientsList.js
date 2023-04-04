import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllPatients,deletePatient} from '../actions/patientAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {AiFillDelete} from 'react-icons/ai';

const PatientsList = () => {

    const patientState = useSelector(state => state.getAllPatientsReducer);
    const {loading,error,patients} = patientState;
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
                  Delete
                </th>
            </tr>
        </thead>

        <tbody>
        {patients && patients.map(patient => (
          <tr key={patient._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{patient._id}</th>
             <td className="px-6 py-4">{patient.fname} {patient.lname}</td>
             <td className="px-6 py-4">{patient.email}</td>
             <td className="px-6 py-4"><AiFillDelete style={{color : 'red',cursor : 'pointer'}} 
                onClick={() => {dispatch(deletePatient(patient._id))}}
              /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default PatientsList
