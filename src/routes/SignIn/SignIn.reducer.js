const initialState = {
    data: [],
    loading: true,
    fail: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SIGNIN_START':
            return {
                ...state,
                loading: true,
                fail: true
            }
        case 'USER_SIGNIN_SUCCESS':
            return {
                ...state,
                data: action.user,
                loading: false,
                fail: false
            }
        case 'USER_SIGNIN_FAIL':
            return {
                ...state,
                loading: false,
                fail: true
            }
        default: 
            return state;
    }
};

export default reducer;