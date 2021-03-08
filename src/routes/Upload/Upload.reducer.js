const initialState = {
    data: [],
    loading: false,
    uploaded: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_BLOG_START':
            return {
                loading: true,
                uploaded: false
            }
        case 'UPLOAD_BLOG_SUCCESS':
            return {
                data: action.blog,
                loading: false,
                uploaded: true
            }
        case 'UPLOAD_BLOG_FAIL':
            return {
                loading: false,
                uploaded: false
            }
        default: 
            return state;
    }
};

export default reducer;