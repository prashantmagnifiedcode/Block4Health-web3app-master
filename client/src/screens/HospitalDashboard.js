import React ,{useState} from "react";
import axios from "axios";
import CommonTable from "../components/CommonTable";

const HospitalDashboardScreen = () => {
 const [DoctorDetail,setDoctorDetail]=useState({
  HospitalID:"",DoctorPubliceKey:""
 })
 const [add,setadd]=useState(false)
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

  return (
    <>
       {/* <form className="w-1/2 justify-self-center">
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
               </form> */}
               <div className="bg-slate-200 py-1 flex justify-around items-center">
                <div>
                    <p>AIIMS</p>
                </div>
                <div>
                    <p>0xbd67e31593247eC8167eFf114A05e525D870634e</p>
                </div>

                <button
                onClick={()=>setadd((prev)=>!prev)}
                type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    
                        {add? <>Close</> :<>Add Doctor</>}
                    
 
    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>

               </div>
               {
                add?
               
               <div className=" flex justify-center  items-center ">

               <div class="   lg:w-6/12">
            <div class=" sm:p-20 xl:w-10/12">
                <div class="space-y-4">
                    <a href="">
                        {/* <img src="../public/images/logo.svg" class="w-40" alt="tailus logo"> */}
                    </a>
                    <p class="font-medium text-lg text-gray-600">Welcome & Resgister Your Doctor</p>
                </div>
                
                {/* <div class="mt-12 grid gap-6 sm:grid-cols-2">
                    <button class="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                        <div class="flex gap-4 justify-center">
                
                            <span class="block w-max font-medium tracking-wide text-sm text-blue-700">with  Google</span>
                        </div>
                    </button>
                    <button class="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                        <div class="flex gap-4 items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            <span class="block w-max font-medium tracking-wide text-sm text-white">with Github</span>
                        </div>
                    </button>
                </div> */}
{/* 
                <div role="hidden" class="mt-12 border-t">
                    <span class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                </div> */}

                <form action="" class="space-y-6 py-6">
                    <div>
                        
                        <input type='password' placeholder='DoctorPubliceKey' 
                                class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                       
                       value={DoctorDetail.DoctorPubliceKey}
                   name="DoctorPubliceKey"
                   onChange={handlechange}
                  />
                    </div>

                    <div class="flex flex-col items-end">
                        
                         <input type='text' placeholder='HospitalID'
                                class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        
                         value={DoctorDetail.HospitalID}
                         name="HospitalID"
                         onChange={handlechange}
                     />
                    </div>

                    <div>
                        <button
                          onClick={DoctorRegister}
                        class="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                            <span class="font-semibold text-white text-lg">Register</span>
                        </button>
                       
                    </div>
                </form>

            </div>
        </div>
               </div>:null
}
<div className=" mt-5">

<p

 class="text-gray-500 p-2">
 Resgistered Doctor

</p>

</div>
<div className="flex justify-center px-3">

<CommonTable/>
</div>
    </>
  );
};

export default HospitalDashboardScreen;
