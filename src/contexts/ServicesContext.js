import React, { Component } from 'react';


const ServicesContext = React.createContext({
    service: [],
    serviceList: [],
    reviews: [],
    user: 0,
    serviceUserId: 1,
    error: null,
    open: false,
    setError: () => {},
    setAdmin: () => {},
    setUser: () => {},
    setServiceUserId: () => {},
    clearError: () => {},
    setService: () => {},
    clearService: () => {},
    setReviews: () => {},
    addReview: () => {},
    setServiceList: () => {},
    clearServiceList: () => {},
})

export default ServicesContext;

export class ServicesProvider extends Component {
    state = {
        service: [],
        serviceList: [],
        reviews: [],
        user: 0,
        serviceUserId: null,
        error: null,
        isAdmin: false,
        open: false
    }

    setOpen = (e) => {
        this.setState({ open: !this.state.open })
    }

    setError = error => {
        this.setState({ error })
    }

    setAdmin = isAdmin => {
        this.setState({ isAdmin })
    }
    
    setUser = user => {
        this.setState({ user })
    }

    setServiceUserId = serviceUserId => {
        this.setState({ serviceUserId })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setService = service => {
        this.setState({ service })
    }

    clearService = () => {
        this.setState({ service: [] })
    }
    
    setReviews = reviews => {
        this.setState({ reviews })
    }

    addReview = review => {
        this.setReviews([
            ...this.state.reviews,
            review
        ])
    }

    setServiceList = serviceList => {
        this.setState({ serviceList })
    }

    clearServiceList = () => {
        this.setState({ serviceList: [] })
    }

    render() {
        const value = {
            service: this.state.service,
            serviceList: this.state.serviceList,
            error: this.state.error,
            user: this.state.user,
            reviews: this.state.reviews,
            serviceUserId: this.state.serviceUserId,
            isAdmin: this.state.isAdmin,
            open: this.state.open,
            setOpen: this.setOpen,
            setError: this.setError,
            setAdmin: this.setAdmin,
            setUser: this.setUser,
            setServiceUserId: this.setServiceUserId,
            clearError: this.clearError,
            setService: this.setService,
            clearService: this.clearService,
            setServiceList: this.setServiceList,
            clearServiceList: this.clearServiceList,
            setReviews: this.setReviews,
            addReview: this.addReview
        }

        return (
            <ServicesContext.Provider value={value}>
                {this.props.children}
            </ServicesContext.Provider>
        )
    }

}

