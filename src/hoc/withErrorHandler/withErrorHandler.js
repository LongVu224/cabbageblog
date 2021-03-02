import React, {Component} from 'react';

import { ModalInfo } from '../../components/Modal2/Modal';
import Aux from '../Auxx/Auxx';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
            showModal: false
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null, showModal: false});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error, showModal: true});
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render () {
            return (
                <Aux>
                    <ModalInfo 
                        showModal={this.state.showModal} 
                        setShowModal={() => this.setState({showModal: !this.state.showModal})}
                        title="Oops"
                        content={this.state.error ? this.state.error.message : null}/>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;