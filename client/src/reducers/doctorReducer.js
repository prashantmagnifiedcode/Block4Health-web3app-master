export const registerDoctorReducer = (state={},action) => {
    switch(action.type){
        case 'META_NOT_REGISTER' :
            return{
                loading : false
            }
        case 'DOCTOR_REGISTER_REQUEST' :
            return{
                loading : true
            }
        case 'DOCTOR_REGISTER_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'DOCTOR_REGISTER_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const loginDoctorReducer = (state={},action) => {
    switch(action.type){
        case 'DOCTOR_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'DOCTOR_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentDoctor : action.payload
            }
        case 'DOCTOR_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

// export const connectMetamaskDoctorReducer = (state={},action) => {
//     switch(action.type){
//         case 'DOCTOR_CONNECT_METAMASK_REQUEST' :
//             return{
//                 loading : true
//             }
//         case 'DOCTOR_CONNECT_METAMASK_SUCCESS' :
//             return{
//                 loading : false,
//                 success : true,
//                 currentAccount : action.payload
//             }
//         case 'DOCTOR_CONNECT_METAMASK_FAIL' :
//             return{
//                 loading : false,
//                 error : action.payload
//             }
//         default : return state
//     }
// };

export const getAllDoctorsReducer = (state = {doctors : []}, action) => {
    switch(action.type){
      case 'GET_DOCTORS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_DOCTORS_SUCCESS' :
          return {
              doctors : action.payload,
              loading : false
          }
      case 'GET_DOCTORS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const addEhrDoctorReducer = (state={},action) => {
    switch(action.type){
        case 'DOCTOR_ADDEHR_REQUEST' :
            return{
                loading : true
            }
        case 'DOCTOR_ADDEHR_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'DOCTOR_ADDEHR_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};