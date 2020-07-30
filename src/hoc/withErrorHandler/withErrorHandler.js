import React, {Component} from 'react';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
          error: null
        };

        componentWillMount() {
            this.req_interceptor = axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });
                return request;
            });

            this.resp_interceptor = axios.interceptors.response.use(resp => resp, error => {
                this.setState({
                    error: error
                });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.req_interceptor);
            axios.interceptors.response.eject(this.resp_interceptor);
        }

        closeModal = () => {
            this.setState({
                error: null
            });
        };

        render() {
            return (
                <Aux>
                    <Modal visibility={this.state.error} closeModal={this.closeModal}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
};

export default withErrorHandler;
