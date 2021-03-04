import {connect} from 'react-redux';

import Contact from './Contact.component';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './actions/Contact.send';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendEmail: (mail) => dispatch(actions.sendEmail(mail))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Contact, actions.request));