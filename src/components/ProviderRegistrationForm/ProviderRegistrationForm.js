import React, { Component } from 'react';
import ServicesService from '../../services/services-api-service';
import ServicesContext from '../../contexts/ServicesContext';
import './ProviderRegistrationForm.css';

class ProviderRegistrationForm extends Component {

    static contextType = ServicesContext;

    state = { error: null }

    static defaultProps = {
        onRegistrationSuccess: () => {},
    }

    componentDidMount() {
        const { open } = this.context
        if (open === true) {
            this.context.setOpen()
        }
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { service_type, name, about, phone, email } = ev.target;

        this.setState({ error: null })
        ServicesService.postService({
            service_type: service_type.value,
            name: name.value,
            about: about.value,
            phone: phone.value,
            email: email.value
        })
            .then(service => {
                service_type.value='...'
                name.value=''
                about.value=''
                phone.value=''
                email.value=''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <form className='providerRegistration' onSubmit={this.handleSubmit}>

                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>

                <h2>
                    Register a Service
                </h2>

                <div>
                    <label>Service Type</label>
                    <select id='service_type'>
                        <option value='...'>...</option>
                        <option value='mechanic'>Mechanic</option>
                        <option value='plumbing'>Plumbing</option>
                        <option value='remodeling'>Home Remodel</option>
                        <option value='lawnscaping'>Lawnscaping</option>
                        <option value='travel'>Travel</option>
                        <option value='hair'>Hair Stylist</option>
                        <option value='jobs'>Employment</option>
                        <option value='phone'>Phone Repair</option>
                    </select>
                </div>

                <div>
                    <label>Business Name</label>
                    <input 
                        name='name'
                        type='text'
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
                        rows='4'
                        placeholder='Tell us about your business...'
                    />
                </div>

                <div>
                    <label>Phone</label>
                    <input 
                        name='phone'
                        type='tel'
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        id='ProviderRegistration_phone'
                    />
                    {/* <small>Format: 123-456-7890</small> */}
                </div>

                <div>
                    <label>Email</label>
                    <input 
                        name='email'
                        type='email'
                        required
                        id='ProviderRegistration_email'
                    />
                </div>

                <button className='providerRegButton' type='submit'>
                    Register
                </button>
            </form>
        )
    }
}

export default ProviderRegistrationForm;