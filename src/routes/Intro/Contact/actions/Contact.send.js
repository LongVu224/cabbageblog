import axios from 'axios';

export const request = axios.create({
    baseURL: process.env.REACT_APP_API_EMAIL
});

export const sendEmailSuccess = (data) => {
    return {
        type: 'SEND_EMAIL_SUCCESS',
        blog: data
    };
};

export const sendEmailFail = (error) => {
    return {
        type: 'SEND_EMAIL_FAIL',
        error: error
    };
};

export const sendEmailStart = () => {
    return {
        type: 'SEND_EMAIL_START'
    }
};

export const sendEmail = (emailData) => {
    return dispatch => {
        dispatch(sendEmailStart());
        axios.post('https://ancient-ridge-71739.herokuapp.com/api/email', emailData)
            .then(res => {
                dispatch(sendEmailSuccess(emailData))
            })
            .catch(err => {
                dispatch(sendEmailFail(err))
            })
    }
};