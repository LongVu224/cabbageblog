import {connect} from 'react-redux';

import Home from './Home.component';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/HomeBlog.fetch';

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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));