import axios from 'axios';
import swal from 'sweetalert';
import {RegisterPatient} from '../utils/Register'

export const registerPatient = (patient) => async dispatch => {
    dispatch({type : 'PATIENT_REGISTER_REQUEST'})
    console.log("val")

    try {
        const{MetaPrivateKey}=patient
        const val=await RegisterPatient(MetaPrivateKey)
        console.log("val",val)
        if(val){
            
            const res = await axios.post('/api/patients/register',patient);
            console.log("diap val",val,res.status)
            if( res.status){
    
                dispatch({type : 'PATIENT_REGISTER_SUCCESS'})
            }
        }else{
    dispatch({type : 'META_NOT_REGISTER'})
            
        }
       
    } catch (error) {
        dispatch({type : 'PATIENT_REGISTER_FAIL',payload : error})
    }
};

export const loginPatient = (patient) => async dispatch => {
    dispatch({type : 'PATIENT_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/patients/login',patient);
        dispatch({type : 'PATIENT_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentPatient', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'PATIENT_LOGIN_FAIL',payload : error});
    }
};

export const logoutPatient = () => dispatch => {
    localStorage.removeItem('currentPatient');
    window.location.href = '/login/loginpatient';
};

export const connectWalletPatient = () => async dispatch => {
    dispatch({type : 'PATIENT_CONNECT_METAMASK_REQUEST'});
    try {
        const { ethereum } = window;
        if (!ethereum) return alert("Please install MetaMask.");
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
        dispatch({type : 'PATIENT_CONNECT_METAMASK_SUCCESS',payload : accounts[0]});
        // window.location.reload();
    } catch (error) {
        dispatch({type : 'PATIENT_CONNECT_METAMASK_FAIL',payload : error});
        throw new Error("No ethereum object");
    }
};

export const getAllPatients = () => async (dispatch) => {
    dispatch({type : 'GET_PATIENTS_REQUEST'});
    try {
        const res = await axios.get('/api/patients/getallpatients');
        dispatch({type : 'GET_PATIENTS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_PATIENTS_FAIL',payload : err});
    }
};

export const deletePatient = (patientid) => async (dispatch) => {
    try {
        await axios.post('/api/patients/deletepatient',{patientid});
        swal("Patient Deleted Successfully!","success");
        window.location.reload();
    } catch (error) {
        swal("Error While Deleting Patient");
    }
};