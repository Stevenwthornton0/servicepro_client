import React, { Component } from 'react';
import ServicesApiService from '../../services/services-api-service';
import ServiceListItem from '../../components/ServiceListItem/ServiceListItem';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import ServicesContext from '../../contexts/ServicesContext';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import './ServiceList.css';

class ServiceList extends Component {

    static contextType = ServicesContext;

    constructor(props) {
        super(props)
        this.state = {
            serviceType: this.props.match.params.serviceType
        }
    } 

    componentDidMount() {
        this.context.waitingTrue()
        const { serviceType } = this.state;
        ServicesApiService.getServicesList(serviceType)
            .then(res => {
                    this.context.setServiceList(res)
                    this.context.waitingFalse()
                })
        AuthApiService.getUser(TokenService.getUsername())
        .then(user => {
            this.context.setAdmin(user.admin)
        })
    }

    componentWillUnmount() {
        this.context.clearServiceList()
    }

    deleteService = (serviceId) => {
        const { serviceType } = this.state;
        ServicesApiService.deleteService(serviceId)
            .then(ServicesApiService.getServicesList(serviceType)
                .then(res => {
                        this.context.setServiceList(res)
                    })
            )
        window.location.reload();
    }

    handleServices() {
        const { serviceList, isAdmin } = this.context;
        if (serviceList !== []) {
            return (
                serviceList.map(service => 
                    <ServiceListItem 
                        key={service.id}
                        service={service}
                        admin={isAdmin}
                        deleteService={this.deleteService}
                    />
                )
            )
        }
        return null
    }

    render () {
        const { waiting } = this.context;
        return (
            <div className='serviceList'>
                <div className='loader'>
                    {waiting && <LoaderSpinner />}
                </div>

                {this.handleServices()}
            </div>
        )
    }
}

export default ServiceList;