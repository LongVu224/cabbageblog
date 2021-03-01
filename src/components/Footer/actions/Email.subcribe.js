import axios from '../../../api/axios'


export const emailSubcribeSuccess = (data) => {
    return {
        type: 'EMAIL_SUBCRIBE_SUCCESS',
        blog: data
    };
};

export const emailSubcribeFail = (error) => {
    return {
        type: 'EMAIL_SUBCRIBE_FAIL',
        error: error
    };
};

export const emailSubcribeStart = () => {
    return {
        type: 'EMAIL_SUBCRIBE_START'
    }
};

export const emailSubcribe = (email) => {
    return dispatch => {
        dispatch(emailSubcribeStart());
        axios.post('subcribe', email)
            .then(res => {
                dispatch(emailSubcribeSuccess(email))
            })
            .catch(err => {
                dispatch(emailSubcribeFail(err))
            })
    }
};