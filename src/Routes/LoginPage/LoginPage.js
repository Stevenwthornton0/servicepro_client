import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {

    handleLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/services';
        history.push(destination)
        window.location.reload();
    }

    render() {
        return (
            <div>
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </div>
        )
    }
}

export default LoginPage;