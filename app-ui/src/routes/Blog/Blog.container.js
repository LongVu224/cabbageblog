import {connect} from 'react-redux';

import Blog from './Blog.component';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/Blog.fetch';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchBlog: (nameParam) => dispatch(actions.fetchBlog(nameParam))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Blog, axios));