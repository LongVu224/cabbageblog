const initialState = {
    data: [],
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EMAIL_SUBCRIBE_START':
            return {
                loading: true,
            }
        case 'EMAIL_SUBCRIBE_SUCCESS':
            return {
                data: action.blog,
                loading: false,
            }
        case 'EMAIL_SUBCRIBE_FAIL':
            return {
                loading: false,
            }
        default: 
            return state;
    }
};

export default reducer;