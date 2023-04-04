import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllDoctors,deleteDoctor} from '../actions/doctorAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {AiFillDelete} from 'react-icons/ai';

const DoctorsList = () => {

    const doctorState = useSelector(state => state.getAllDoctorsReducer);
    const {loading,error,doctors} = doctorState;
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
                  Delete
                </th>
            </tr>
        </thead>

        <tbody>
        {doctors && doctors.map(doctor => (
          <tr key={doctor._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{doctor._id}</th>
             <td className="px-6 py-4">{doctor.fname} {doctor.lname}</td>
             <td className="px-6 py-4">{doctor.email}</td>
             <td className="px-6 py-4"><AiFillDelete style={{color : 'red',cursor : 'pointer'}} 
                onClick={() => {dispatch(deleteDoctor(doctor._id))}}
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

export default DoctorsList
