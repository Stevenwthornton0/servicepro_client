import React, { Component } from 'react';
import ProviderRegistrationForm from '../../components/ProviderRegistrationForm/ProviderRegistrationForm';

class ProviderRegistration extends Component {

    handleRegistrationSuccess = serviceId => {
        const { history } = this.props;
        history.push(`/services/service/${serviceId}`)
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