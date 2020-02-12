import React, { Component } from 'react';
import Registration from '../../components/Registration/Registration';

class UserRegistration extends Component {

    handleRegistrationSuccess = user => {
        const { history } = this.props;
        history.push('/login')
    }

    render() {
        return(
            <Registration onRegistrationSuccess={this.handleRegistrationSuccess}/>
        )
    }
}

export default UserRegistration;