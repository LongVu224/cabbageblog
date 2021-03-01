import axios from '../../../api/axios';


export const uploadBlogSuccess = (data) => {
    return {
        type: 'UPLOAD_BLOG_SUCCESS',
        blog: data
    };
};

export const uploadBlogFail = (error) => {
    return {
        type: 'UPLOAD_BLOG_FAIL',
        error: error
    };
};

export const uploadBLogStart = () => {
    return {
        type: 'UPLOAD_BLOG_START'
    }
};

export const uploadBlog = (blogData, files) => {
    return dispatch => {
        dispatch(uploadBLogStart());
        axios.post('blog', blogData)
            .then(res => {
                dispatch(uploadBlogSuccess(blogData))
            })
            .catch(err => {
                dispatch(uploadBlogFail(err))
            })
    }
};