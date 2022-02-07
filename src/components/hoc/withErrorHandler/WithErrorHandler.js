import React from 'react';
import Modal from '../../UI/Modal/Modal';

function WithErrorHandler(WrappedComponent, axios) {
    return class extends React.Component {
        constructor() {
            super();
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, err => this.setState({ error: err }))
        }

        state = {
            error: null
        }

        componentWillUnmount(){
            axios.interceptors.response.eject(this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
        }

        errorConfirmedHandler = () => this.setState({ error: null })

        render() {
            return (
                <>
                    <Modal show={this.state.error} closeModal={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default WithErrorHandler;


// return (props) => {
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         axios.interceptors.request.use(req => setError(null))
//         axios.interceptors.response.use(null, err => {
//             setError(err)
//         })
//     })

//     const errorConfirmedHandler = () => setError(false)

//     return <>

//     </>
// }