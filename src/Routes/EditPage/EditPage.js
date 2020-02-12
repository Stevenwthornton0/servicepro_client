import React, { Component } from 'react';
import ServicesContext from '../../contexts/ServicesContext';
import ServicesApiService from '../../services/services-api-service';
import './EditPage.css';

class EditPage extends Component {
    static contextType = ServicesContext;

    state = { error: null }

    onUpdateSuccess = () => {
        const { history } = this.props;
        history.push('/services')
    } 

    handleSubmit = ev => {
        ev.preventDefault();
        const { serviceId } = this.props.match.params;
        const { name, about, phone, email } = ev.target;

        this.setState({ error: null })
        ServicesApiService.updateService(
            serviceId, {
            name: name.value,
            about: about.value,
            phone: phone.value,
            email: email.value
        })
            .then(this.onUpdateSuccess())
    }

    componentDidMount() {
        const { serviceId } = this.props.match.params
        ServicesApiService.getService(serviceId)
            .then(service => {
                this.context.setService(service)
                this.context.setServiceUserId(service.user.id)
            })
    }

    componentWillUnmount() {
        this.context.clearService();
    }

    render() {
        const { error, service } = this.context;
        return (
            <form className='serviceEdit' onSubmit={this.handleSubmit}>

                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>

                <div>
                    <p className='type'>Service Type: {service.service_type}</p>
                </div>

                <div>
                    <label>Business Name</label>
                    <input 
                        name='name'
                        type='text'
                        defaultValue={service.name}
                        required
                        id='ProviderRegistration_name'
                    />
                </div>

                <div>
                    <label>Business Description</label>
                    <textarea 
                        required
                        aria-label='Business Description'
                        id='about'
                        cols='30'
                        rows='7'
                        defaultValue={service.about}
                    />
                </div>

                <div>
                    <label>Phone</label>
                    <input 
                        name='phone'
                        type='tel'
                        required
                        id='ProviderRegistration_phone'
                        defaultValue={service.phone}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input 
                        name='email'
                        type='email'
                        required
                        id='ProviderRegistration_email'
                        defaultValue={service.email}
                    />
                </div>

                <button className='editButton' type='submit'>
                    update
                </button>
            </form>
        )
    }
}

export default EditPage