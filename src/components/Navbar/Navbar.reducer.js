const initialState = {
    data: [],
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOGGED_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_LOGGED_SUCCESS':
            return {
                ...state,
                data: action.blog[0],
                loading: false
            }
        case 'FETCH_LOGGED_FAIL':
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
};

export default reducer;