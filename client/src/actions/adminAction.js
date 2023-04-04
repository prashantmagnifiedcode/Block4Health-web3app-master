import axios from 'axios';

export const loginAdmin = (admin) => async dispatch => {
    dispatch({type : 'ADMIN_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/admin/login',admin);
        dispatch({type : 'ADMIN_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentAdmin', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'ADMIN_LOGIN_FAIL',payload : error});
    }
};

export const logoutAdmin = () => dispatch => {
    localStorage.removeItem('currentAdmin');
    window.location.href = '/login/loginadmin';
};