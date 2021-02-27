import axios from '../../../api/axios';


export const fetchBlogSuccess = (data) => {
    return {
        type: 'FETCH_BLOG_SUCCESS',
        blog: data
    };
};

export const fetchBlogFail = (error) => {
    return {
        type: 'FETCH_BLOG_FAIL',
        error: error
    };
};

export const fetchBlogStart = () => {
    return {
        type: 'FETCH_BLOG_START'
    }
};

export const fetchBlog = () => {
    return dispatch => {
        dispatch(fetchBlogStart());
        axios.get('blog')
            .then(res => {
                dispatch(fetchBlogSuccess(res.data.blogs));
            })
            .catch(err => {
                dispatch(fetchBlogFail(err))
            })
    }
};