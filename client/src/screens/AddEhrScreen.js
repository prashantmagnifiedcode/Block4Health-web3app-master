import React,{useState} from 'react';
// import {useDispatch} from 'react-redux';
import { Web3Storage } from 'web3.storage'
import {jsPDF} from 'jspdf';
// import {doctorAddEhr} from '../actions/doctorAction';
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3MmQyN2M3NS1hOTAzLTQyOTUtYjU4YS1kNzY5N2M3NjQ3NzMiLCJlbWFpbCI6InR1c2hhZHBhdG9kaWExM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGZkYTJlZWViM2QwMWI0MDk5ZGMiLCJzY29wZWRLZXlTZWNyZXQiOiIwNjJhODMwMTUxOWY2ZWVjNjExOTVmYWI2NTI0ZTk5ZmM5MmM5MzdkZjk2MzI5MzI1MmQ4ODFiMTQ3YzcxMzE5IiwiaWF0IjoxNjc2MTM2ODA3fQ.AW7AB8staY0UyArWBkwv0GoDXJEk_QFkHLLvSyC1aAM';

const AddEhrScreen = () => {
    const [patientID,setPatientID] = useState('');
    const [age,setAge] = useState('');
    const [diagnosis,setDiagnosis] = useState('');
    const [checkbox,setCheckbox] = useState('');
    const [file,setfile] = useState();
    const [PdfName,setPdfName] = useState("Block4Health");
    const [Cid,setCid] = useState();

    const storage = new Web3Storage({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQwNzQ2MTdCYUQxMzcyMUI5NjE5NkQ3QTE5M0Q2Y0M5M2RlNUYxNEEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzc2ODYxMzMxNjIsIm5hbWUiOiJCbG9jazRIZWFsdGgifQ.Q6tVbcAcpuLu0l5wczX2gbL3cJuz6ruvZlwowQ2TvLU"})

  const storageHandler = async (e) => {
        e.preventDefault()
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async()=> {
        const dataFile = [new File([reader.result], `${PdfName}.pdf`)]
        const cid = await storage.put(dataFile)
        setCid(cid)
        if(cid){
          generatePatientPDF()
        }

    };
        
    }
    const generatePatientPDF = async () => {
      const data = {patientID,age,diagnosis};

      // dispatch(doctorAddEhr(data));
      const doc = new jsPDF();
      doc.text(`Patient ID: ${data.patientID}`, 10, 10);
      doc.text(`Patient Age: ${data.age}`, 10, 20);
      doc.text(`Patient Diagnosis: ${data.diagnosis}`, 10, 30);
      // const pdfUrl = doc.output('datauristring');
      // console.log(pdfUrl);
      const pdf = doc.output();
      console.log(pdf);

      const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      maxBodyLength: "Infinity",
      headers: {
        'Content-Type': 'application/json',
        Authorization: JWT,
        'pinata_api_key': '0fda2eeeb3d01b4099dc',
        'pinata_secret_api_key': '062a8301519f6eec61195fab6524e99fc92c937df963293252d881b147c71319'
      },
      body: JSON.stringify({
        pinataMetadata: {
          name: 'Form data.pdf'
        },
        pinataContent: {
          
        },
        file: pdf
      })
    });
    const result = await response.json();
    const pdfHash = result.IpfsHash;
    console.log(pdfHash);
    }

  return (<>
    <div className='bg-teal-900 md:p-20 py-10 px-4 md:my-20 my-10 flex justify-center'>
      <div className='h-full w-full backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 md:px-20 md:py-14 px-4 py-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl md:w-4/5'>
         
         <h1 className='text-white text-center text-5xl font-black hover:text-[#269c94]'>Patient EHR</h1>
         <form>
                 <div className='mt-10'>
                 <input type='number' placeholder='Patient ID' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={patientID}
                        onChange={e => setPatientID(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='number' placeholder='Age' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={age}
                        onChange={e => setAge(e.target.value)}
                  />
                 </div>
                 <div className='mt-5'>
                 <input type='file' placeholder='Age' 
                        className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                         
                        onChange={e => setfile(e.target.files[0])}
                  />
                 </div>
                 <div className='mt-5 flex items-start'>
                 <textarea placeholder='Diagnosis...' 
                        className='border-solid border-2 shadow-sm h-96 shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                        value={diagnosis}
                        onChange={e => setDiagnosis(e.target.value)}
                  />
                 </div>
                 <div className='mt-5 flex justify-start items-center w-full'>
                 <input type='checkbox' checked={checkbox}
                        className='border-solid border-x-2 rounded-3xl border-y-2 border-teal-900'
                        onChange={e => setCheckbox(e.target.checkbox)}
                  />
                 <span className='ml-2 text-white'>
                    I accept the <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Terms of Use</a> & <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Privacy Policy</a>
                 </span>
                 </div>
                 <div className='md:mt-14 mt-8'>
                    <button className='w-full bg-white rounded-3xl shadow-sm shadow-gray-400 font-black hover:bg-teal-900 hover:text-white py-3 text-center text-teal-900'
                     onClick={storageHandler} >Submit</button>
                 </div>
               </form>
      </div>
    </div>
    </>
  )
}

export default AddEhrScreen
