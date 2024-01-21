import {connect} from 'react-redux';

import Blogs from './Blogs.component';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/Blogs.fetch';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchBlog: () => dispatch(actions.fetchBlog())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Blogs, axios));