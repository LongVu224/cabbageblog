import {connect} from 'react-redux';

import SignIn from './SignIn.component';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/SignIn.user';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignIn: (user) => dispatch(actions.userSignIn(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(SignIn, axios));