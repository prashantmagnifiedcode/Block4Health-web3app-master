import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {registerPatientReducer,loginPatientReducer,connectMetamaskPatientReducer,getAllPatientsReducer} from './reducers/patientReducer';
import {registerDoctorReducer,loginDoctorReducer,getAllDoctorsReducer,addEhrDoctorReducer} from './reducers/doctorReducer';
import {loginAdminReducer} from './reducers/adminReducer';

let currentPatient = localStorage.getItem('currentPatient') ? JSON.parse(localStorage.getItem('currentPatient')) : null
let currentDoctor = localStorage.getItem('currentDoctor') ? JSON.parse(localStorage.getItem('currentDoctor')) : null
let currentAdmin = localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')) : null

const rootReducer = combineReducers({
    registerPatientReducer,
    registerDoctorReducer,
    loginPatientReducer,
    connectMetamaskPatientReducer,
    loginDoctorReducer,
    loginAdminReducer,
    getAllPatientsReducer,
    getAllDoctorsReducer,
    addEhrDoctorReducer,

});

const initialState = {
    loginPatientReducer : {
        currentPatient : currentPatient
    },
    loginDoctorReducer : {
        currentDoctor : currentDoctor
    },
    loginAdminReducer : {
        currentAdmin : currentAdmin
    },
};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;