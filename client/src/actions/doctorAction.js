import axios from 'axios';
import swal from 'sweetalert';
import {registerHospital} from '../utils/RegisterHospital'

export const registerDoctor = (doctor) => async dispatch => {
    dispatch({type : 'DOCTOR_REGISTER_REQUEST'})
    try {
        // const {MetaPrivateKey}=doctor
        // const val=await registerHospital(MetaPrivateKey)
        // if(val){

            const res = await axios.post('/api/doctors/register',doctor);
            if( res.status==200){
                dispatch({type : 'DOCTOR_REGISTER_SUCCESS'});
            }
        
    } catch (error) {
        dispatch({type : 'DOCTOR_REGISTER_FAIL',payload : error})
    }
};

export const loginDoctor = (doctor) => async dispatch => {
    dispatch({type : 'DOCTOR_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/doctors/login',doctor);
        console.log(response);
        dispatch({type : 'DOCTOR_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentDoctor', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'DOCTOR_LOGIN_FAIL',payload : error});
    }
};

export const logoutDoctor = () => dispatch => {
    localStorage.removeItem('currentDoctor');
    window.location.href = '/login/logindoctor';
};

// export const connectWalletDoctor = () => async dispatch => {
//     dispatch({type : 'DOCTOR_CONNECT_METAMASK_REQUEST'});
//     try {
//         const { ethereum } = window;
//         if (!ethereum) return alert("Please install MetaMask.");
//         const accounts = await ethereum.request({ method: "eth_requestAccounts", });
//         dispatch({type : 'DOCTOR_CONNECT_METAMASK_SUCCESS',payload : accounts[0]});
//         // window.location.reload();
//     } catch (error) {
//         dispatch({type : 'DOCTOR_CONNECT_METAMASK_FAIL',payload : error});
//         throw new Error("No ethereum object");
//     }
// };

export const getAllDoctors = () => async (dispatch) => {
    dispatch({type : 'GET_DOCTORS_REQUEST'});
    try {
        const res = await axios.get('/api/doctors/getalldoctors');
        dispatch({type : 'GET_DOCTORS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DOCTORS_FAIL',payload : err});
    }
};

export const deleteDoctor = (doctorid) => async (dispatch) => {
    try {
        await axios.post('/api/doctors/deletedoctor',{doctorid});
        swal("Doctor Deleted Successfully!","success");
        window.location.reload();
    } catch (error) {
        swal("Error While Deleting Doctor");
    }
};

export const doctorGrant = (doctorid,patientid) => async (dispatch) => {
     dispatch({type : 'DOCTOR_GRANT_REQUEST'});
     try {
        await axios.post('/api/doctors/doctorgrant',{doctorid,patientid});
        alert('Doctor Granted Successfully');
        window.location.reload();
        const doctors = await axios.get('/api/doctors/doctorgrant');
        dispatch({type : 'DOCTOR_GRANT_SUCCESS',payload : doctors.data});
        window.location.href = '/access';
     } catch (error) {
        dispatch({type : 'DOCTOR_GRANT_FAIL',payload : error});
     }
};

export const doctorRevoke = (doctorid,patientid) => async (dispatch) => {
     dispatch({type : 'DOCTOR_REVOKE_REQUEST'});
     try {
        await axios.post('/api/doctors/doctorrevoke',{doctorid,patientid});
        alert('Doctor Revoked Successfully');
        window.location.reload();
        const doctors = await axios.get('/api/doctors/doctorrevoke');
        dispatch({type : 'DOCTOR_REVOKE_SUCCESS',payload : doctors.data});
        window.location.href = '/access';
     } catch (error) {
        dispatch({type : 'DOCTOR_REVOKE_FAIL',payload : error});
     }
};

export const doctorAddEhr = (data) => async (dispatch) => {
    dispatch({type : 'DOCTOR_ADDEHR_REQUEST'});
    try {
       await axios.post('/api/doctors/doctoraddehr',{data});
       alert('Doctor Added EHR Successfully');
       dispatch({type : 'DOCTOR_ADDEHR_SUCCESS'});
    } catch (error) {
       dispatch({type : 'DOCTOR_ADDEHR_FAIL',payload : error});
    }
};