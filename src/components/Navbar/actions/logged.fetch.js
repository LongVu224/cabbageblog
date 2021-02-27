import axios from '../../../api/axios';


export const fetchLoggedSuccess = (data) => {
    return {
        type: 'FETCH_LOGGED_SUCCESS',
        data: data
    };
};

export const fetchLoggedFail = (error) => {
    return {
        type: 'FETCH_LOGGED_FAIL',
        error: error
    };
};

export const fetchLoggedStart = () => {
    return {
        type: 'FETCH_LOGGED_START'
    }
};

export const fetchLogged = () => {
    return dispatch => {
        dispatch(fetchLoggedStart());
        axios.get('logged-in', {
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res)
                const fetchedLogged = [];
                for (let key in res.data) {
                    fetchedLogged.push({
                        ...res.data[key],
                    });
                }
                dispatch(fetchLoggedSuccess(fetchedLogged));
            })
            .catch(err => {
                dispatch(fetchLoggedFail(err))
            })
    }
};