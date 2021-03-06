import {connect} from 'react-redux';

import Footer from './Footer';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/Email.subcribe';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEmailSubcribe: (email) => dispatch(actions.emailSubcribe(email))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Footer, axios));