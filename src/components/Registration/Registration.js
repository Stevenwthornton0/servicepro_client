import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import ServicesContext from '../../contexts/ServicesContext';
import './Registration.css';

class Registration extends Component {

    state = { error: null };

    static contextType = ServicesContext;

    static defaultProps = {
        onRegistrationSuccess: () => {},
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.context.waitingTrue()
        const { first_name, last_name, user_name, password, email } = ev.target;

        this.setState({ error: null });
        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            user_name: user_name.value.toLowerCase(),
            email: email.value,
            password: password.value,
            admin: 'false'
        })
            .then(user => {
                first_name.value = ''
                last_name.value = ''
                user_name.value = ''
                email.value=''
                password.value = ''
                this.context.waitingFalse()
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({error: res.error })
                this.context.waitingFalse()
            })
    }

    render() {
        const { waiting } = this.context;
        const { error } = this.state;
        return(
            <form
                className='RegistrationForm'
                onSubmit={this.handleSubmit}
            >
                <h2>Sign Up</h2>
                <h3>It's quick and easy.</h3>

                <div role='alert' className='red'>
                    {error && <p>{error}</p>}
                </div>
                <div className='nameContainer'>
                    <div className='first_name'>
                        <label htmlFor='RegistrationForm_first-name'>
                            First Name
                        </label>
                        <input
                            name='first_name'
                            type='text'
                            required
                            id='RegistrationForm_first-name'
                        />
                    </div>
                    <div className='last_name'>
                        <label htmlFor='RegistrationForm_last-name'>
                            Last Name
                        </label>
                        <input
                            name='last_name'
                            type='text'
                            required
                            id='RegistrationForm_last-name'
                        />
                    </div>
                </div>
                <div className='email'>
                    <label htmlFor='RegistrationForm_email'>
                        Email
                    </label>
                    <input
                        name='email'
                        type='email'
                        required
                        id='RegistrationForm_email'
                    />
                </div>
                <div className='user_name'>
                    <label htmlFor='RegistrationForm_user-name'>
                        User Name
                    </label>
                    <input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm_user-name'
                    />
                </div>
                <div className='pass_word'>
                    <label htmlFor='RegistrationForm_password'>
                        Password
                    </label>
                    <p className='requires computer'>
                        Uppercase, lowercase, number & special character required
                    </p>
                    <input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm_password'
                    />
                </div>
                <div className='requires mobile'>
                    <p className='requires'>Requirements:</p>
                    <p>&bull; an uppercase letter</p>
                    <p>&bull; a lowercase letter</p>
                    <p>&bull; a number</p>
                    <p>&bull; a special character</p>
                </div>
                <button type='submit' className='registerButton'>
                    Sign Up
                </button>

                <div className='loader'>
                    {waiting && <LoaderSpinner />}
                </div>
            </form>
        )
    }
}

export default Registration;