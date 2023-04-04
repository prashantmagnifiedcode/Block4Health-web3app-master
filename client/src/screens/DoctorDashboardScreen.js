import React ,{useState} from "react";
import { useSelector } from "react-redux";
import PatientCard from "../components/PatientCard";
import patients from "../patient-data";
import axios from "axios";
const DoctorDashboardScreen = () => {
 const [DoctorDetail,setDoctorDetail]=useState({
  HospitalID:"",DoctorPubliceKey:""
 })
  const DoctorRegister=async(e)=>{
    e.preventDefault()
    const res = await axios.post('/api/Doctors/RegisterDoctor',DoctorDetail);
            console.log("diap val",val,res.status)
  }
  const handlechange=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setDoctorDetail({...DoctorDetail,[name]:value})
  }
  const doctorState = useSelector((state) => state.loginDoctorReducer);

  const { currentDoctor } = doctorState;

  return (
    <>
       <form className="w-1/2 justify-self-center">
                 <div className='grid md:mt-14 mt-10 grid-cols-2 gap-5 '>
                   <input type='text' placeholder='HospitalID'
                           className=' text-black border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50  px-4'
                         value={DoctorDetail.HospitalID}
                         name="HospitalID"
                         onChange={handlechange}
                     />
                   
                         <div className=' flex justify-center items-center'>
              
                 </div>
                 </div>
                 
               
                
                 <div className='mt-5'>
                 <input type='password' placeholder='DoctorPubliceKey' 
                        className='border-solid border-2 text-black shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                   value={DoctorDetail.DoctorPubliceKey}
                   name="DoctorPubliceKey"
                   onChange={handlechange}
                  />
                 </div>
                 <div className='md:mt-14 mt-8'>
                    <button className='w-full bg-white rounded-3xl shadow-sm shadow-gray-400 font-black hover:bg-teal-900 hover:text-white py-3 text-center text-teal-900'
                       onClick={DoctorRegister}
                       >Register Doctor</button>
                 </div>
               </form>
      <div className="flex md:flex-row flex-col my-10 justify-center items-center gap-10 md:gap-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full overflow-hidden border-2 border-teal-900/50 shadow-xl h-36 w-36">
            <img
              className="object-fill w-full"
              src="../images/anita.jpg"
              alt="not valid"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">
              Dr. {currentDoctor.fname} {currentDoctor.lname}
            </h1>
            <p>ID : {currentDoctor._id}</p>
          </div>
        </div>
        <div className="flex justify-between h-1/2 md:w-1/3 gap-2">
          <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
            Recent Patients
          </button>
          <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
            Search Database
          </button>
        </div>
      </div>

      <div className="md:px-32 px-4">
        <hr className="border-light6 border-2" />
      </div>

      <div className="my-14">
        {patients &&
          patients.map((patient) => (
            <PatientCard key={patient.id} patientdata={patient} />
          ))}
      </div>
    </>
  );
};

export default DoctorDashboardScreen;
