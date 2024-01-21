import {connect} from 'react-redux';

import UploadBlog from './Upload.component';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/Upload.send';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUploadBlog: (blog) => dispatch(actions.uploadBlog(blog))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(UploadBlog, axios));