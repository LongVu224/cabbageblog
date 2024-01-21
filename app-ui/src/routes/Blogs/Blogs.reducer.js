const initialState = {
    data: [],
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BLOG_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_BLOG_SUCCESS':
            return {
                ...state,
                data: action.blog,
                loading: false
            }
        case 'FETCH_BLOG_FAIL':
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
};

export default reducer;