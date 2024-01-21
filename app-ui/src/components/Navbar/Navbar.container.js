import {connect} from 'react-redux';

import Navbar from './Navbar';
import axios from '../../api/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/logged.fetch';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchLogged: () => dispatch(actions.fetchLogged())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Navbar, axios));