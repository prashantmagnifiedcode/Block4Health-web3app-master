import axios from 'axios';
import swal from 'sweetalert';
import {registerHospital} from '../utils/RegisterHospital'

export const HospitalDetail = () => dispatch => {
    localStorage.removeItem('currentDoctor');
    window.location.href = '/login/logindoctor';
};
