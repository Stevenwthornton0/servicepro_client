import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import ServicesContext from '../../contexts/ServicesContext';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import './LoginForm.css';

class LoginForm extends Component {
    static contextType = ServicesContext;

    constructor(props) {
        super(props)
        this.state = {
            error: null,
        }
    }

    static defaultProps = {
        onLoginSuccess: () => {},
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ 
            error: null,
        })
        this.context.waitingTrue();
        const { user_name, password } = ev.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                TokenService.saveUsername(user_name.value)
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.context.waitingFalse()
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ 
                    error: res.error,
                    waiting: false
                })
            })
    }

    render() {
        const { error } = this.state;
        const { waiting } = this.context;
        return (
            <form 
                className='loginForm'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <div role='alert'>
                    {error && <p className='error'>{error}</p>}
                </div>
                
                <div className='username'>
                    <label htmlFor='LoginForm_username'>
                        Username
                    </label>
                    <input
                        className='username_input'
                        required
                        name='user_name'
                        id='LoginForm_username'
                    />
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm_password'>
                        Password
                    </label>
                    <input
                        className='password_input'
                        required
                        name='password'
                        type='password'
                        id='LoginForm_passsword'
                    />
                </div>
                <button type='submit' className='loginButton'>
                    Log in
                </button>

                <div className='loader'>
                    {waiting && <LoaderSpinner />}
                </div>    
            </form>
        )
    }
}

export default LoginForm;