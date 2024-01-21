import axios from '../../../api/axios'


export const userSignInSuccess = (data) => {
    return {
        type: 'USER_SIGNIN_SUCCESS',
        user: data
    };
};

export const userSignInFail = (error) => {
    return {
        type: 'USER_SIGNIN_FAIL',
        error: error
    };
};

export const userSignInStart = () => {
    return {
        type: 'USER_SIGNIN_START'
    }
};

export const userSignIn = (userData) => {
    return dispatch => {
        dispatch(userSignInStart());
        axios.post('login', userData)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                dispatch(userSignInSuccess(res.data.token, userData))
            })
            .catch(err => {
                dispatch(userSignInFail(err))
            })
    }
};