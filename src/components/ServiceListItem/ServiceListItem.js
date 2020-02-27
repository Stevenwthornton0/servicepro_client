import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServicesContext from '../../contexts/ServicesContext';
import { displayPhone } from '../../Utils/Utils';
import './ServiceListItem.css';

class ServiceListItem extends Component {
    static contextType = ServicesContext;

    static defaultProps = {
        service: [],
        admin: false,
        deleteService: () => {}
    }

    truncate = (input) => {
        if (input.length > 150)
           return input.substring(0, 150) + '...';
        else
           return input;
     };

    renderDeleteButton(admin, serviceId) {
        const { deleteService } = this.props;
        if (admin) {
            return ( <button className='serviceDelete' onClick={e => deleteService(serviceId)}>delete</button>) 
        }

        return null
    }

    render() {
        const { service, admin } = this.props;
        let { city, state } = service;
        if (city && state) {
            city = city.replace(/^\w/, c => c.toUpperCase());
            state = state.replace(/^\w/, c => c.toUpperCase());
        }
        return (
            <div className='serviceItem'>
                <Link to={`/services/service/${service.id}`}>
                    <section className='serviceLink'>
                        <h3>{service.name}</h3>
                        <p className='bold'>{city}, {state}</p>
                        <p>{this.truncate(service.about)}</p>
                        <p className='bold'>Email: <span className='notBold'>{service.email}</span></p>
                        <p className='bold'>Phone: {displayPhone(service)}</p>
                    </section>
                </Link>
                {this.renderDeleteButton(admin, service.id)}
            </div>
        )
    }
}

export default ServiceListItem;