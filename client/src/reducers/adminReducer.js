export const loginAdminReducer = (state={},action) => {
    switch(action.type){
        case 'ADMIN_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'ADMIN_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentAdmin : action.payload
            }
        case 'ADMIN_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};