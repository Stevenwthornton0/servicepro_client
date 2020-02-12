import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../../components/ServiceItem/ServiceItem';
import ServicesService from '../../services/services-api-service';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ServicesContext from '../../contexts/ServicesContext';
import './ServicePage.css';

class ServicePage extends Component {
    static contextType = ServicesContext;

    static defaultProps = {
        match: { params: {} }
    }

    componentDidMount() {
        const { serviceId } = this.props.match.params
        ServicesService.getService(serviceId)
            .then(service => {
                this.context.setService(service)
                this.context.setServiceUserId(service.user.id)
            })
        ServicesService.getServiceReviews(serviceId)
            .then(reviews => {
                this.context.setReviews(reviews)
            })
        AuthApiService.getUser(TokenService.getUsername())
            .then(user => {
                this.context.setUser(user.id)
                this.context.setAdmin(user.admin)
            })
    }

    componentWillUnmount() {
        this.context.clearService()
    }

    deleteReview = (reviewId) => {
        const { serviceId } = this.props.match.params;

        ServicesService.deleteReview(serviceId, reviewId)
        ServicesService.getServiceReviews(serviceId)
            .then(reviews => this.context.setReviews(reviews))
    }


    serviceReviews({ reviews, isAdmin=false, deleteReview }) {
        if (reviews[0]) {
            return (
                <ul className='ServicePage_reviews-list'>
                    {reviews.map(review => 
                        <li key={review.id} className='ServicesPage_review'>
                            <p className='bold'>Rating: <span className='notBold'>{review.rating} / 5 Stars</span></p>
                            <p>"{review.text}"</p>
                            <p className='bold'>&#8208; {review.user.first_name} {review.user.last_name}</p>
                            <div className='deleteContainer'>
                                {isAdmin && <button className='reviewDelete' onClick={(e) => deleteReview(review.id)}>Delete</button>}
                            </div>
                        </li>    
                    )}
                </ul>
            )}
            return (
                <p className='noReviews'>No one has posted a review</p>
            )
    }



    ownerEdit = () => {
        const { user, serviceUserId, service } = this.context;

        if (user === serviceUserId) {
            return (
                <Link className='edit' to={`/services/service/${service.id}/edit`}>Edit</Link>
            )
        }

        return null
    }

    render() {
        const { reviews, isAdmin, service } = this.context;

        return (
            <div className='servicePage'>
                <ServiceItem 
                    service={service}
                />

                <this.ownerEdit />

                <this.serviceReviews reviews={reviews} isAdmin={isAdmin} deleteReview={this.deleteReview}/>

                <div className='line'></div>

                <ReviewForm />
            </div>
        )
    }
}

export default ServicePage;