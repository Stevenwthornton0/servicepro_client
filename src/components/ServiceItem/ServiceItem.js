import React, { Component } from 'react';
import { displayPhone } from '../../Utils/Utils';
import './ServiceItem.css';

class ServiceItem extends Component {

    static defaultProps = {
        service: {}
    }

    render() {
        const { service } = this.props;
        return (
            <div className='service'>
                <h2>{service.name}</h2>
                <p className='bold'>Phone: {displayPhone(service)}</p>
                <p className='bold'>Email: <span className='notBold'>{service.email}</span></p>
                <p>{service.about}</p>
            </div>
        )
    }
}

export default ServiceItem;