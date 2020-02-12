import React, { Component } from 'react';
import ProviderRegistrationForm from '../../components/ProviderRegistrationForm/ProviderRegistrationForm';
import './ProviderRegistration.css';

class ProviderRegistration extends Component {

    handleRegistrationSuccess = service => {
        const { history } = this.props;
        history.push('/services')
    }

    render() {
        return (
            <div>
                <ProviderRegistrationForm 
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </div>
        )
    }
}

export default ProviderRegistration;