import React, { Component } from 'react';
import ServicesApiService from '../../services/services-api-service';
import ServiceListItem from '../../components/ServiceListItem/ServiceListItem';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import ServicesContext from '../../contexts/ServicesContext';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import FilterList from '../../components/FilterList/FilterList';
import './ServiceList.css';

class ServiceList extends Component {

    static contextType = ServicesContext;

    constructor(props) {
        super(props)
        this.state = {
            serviceType: this.props.match.params.serviceType,
            empty: false
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
                .then(res => 
                    window.location.reload()
                )
            )
    }

    handleServices() {
        const { serviceList, isAdmin } = this.context;
        if (serviceList.length) {
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
        } if (!serviceList.length) {
            return (
                <h3 className='noneFound'>No Services Found</h3>
            )
        }
    }

    refreshPage = () => {
        window.location.reload()
    }

    filterPage = ev => {
        ev.preventDefault()
        this.context.waitingTrue();
        let { city, state } = ev.target;
        city = city.value.toLowerCase();
        state = state.value.toLowerCase();

        const { serviceType } = this.state;
        ServicesApiService.getServicesList(serviceType, city, state)
            .then(res => {
                console.log(res)
                    this.context.setServiceList(res)
                    this.context.waitingFalse()
                })
    }

    render () {
        const { waiting } = this.context;
        return (
            <div className='serviceList'>
                <div className='loader'>
                    {waiting && <LoaderSpinner />}
                </div>

                {!waiting && <FilterList handleFilter={this.filterPage} handleClear={this.refreshPage}/>}
                {!waiting && this.handleServices()}
            </div>
        )
    }
}

export default ServiceList;