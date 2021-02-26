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
                const fetchedBlog = [];
                for (let key in res.data) {
                    fetchedBlog.push({
                        ...res.data[key],
                    });
                }
                dispatch(fetchBlogSuccess(fetchedBlog));
            })
            .catch(err => {
                dispatch(fetchBlogFail(err))
            })
    }
};