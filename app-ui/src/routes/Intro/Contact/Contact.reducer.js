const initialState = {
    loading: false,
    sent: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_EMAIL_START':
            return {
                loading: true,
                sent: false
            }
        case 'SEND_EMAIL_SUCCESS':
            return {
                data: action.email,
                loading: false,
                sent: true
            }
        case 'SEND_EMAIL_FAIL':
            return {
                loading: false,
                sent: false
            }
        default: 
            return state;
    }
};

export default reducer;