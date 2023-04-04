export const registerPatientReducer = (state={},action) => {
    switch(action.type){
        case 'META_NOT_REGISTER' :
            return{
                loading : false
            }
        case 'PATIENT_REGISTER_REQUEST' :
            return{
                loading : true
            }
        case 'PATIENT_REGISTER_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'PATIENT_REGISTER_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const loginPatientReducer = (state={},action) => {
    switch(action.type){
        case 'PATIENT_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'PATIENT_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentPatient : action.payload
            }
        case 'PATIENT_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};
export const connectMetamaskPatientReducer = (state={},action) => {
    switch(action.type){
        case 'PATIENT_CONNECT_METAMASK_REQUEST' :
            return{
                loading : true
            }
        case 'PATIENT_CONNECT_METAMASK_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentAccount : action.payload
            }
        case 'PATIENT_CONNECT_METAMASK_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const getAllPatientsReducer = (state = {patients : []}, action) => {
    switch(action.type){
      case 'GET_PATIENTS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_PATIENTS_SUCCESS' :
          return {
              patients : action.payload,
              loading : false
          }
      case 'GET_PATIENTS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};
