import config from '../config';
import TokenService from './token-service';

const ServicesApiService = {

    getServicesList(page) {
        return fetch(`${config.API_ENDPOINT}/services/${page}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    getService(serviceId) {
        return fetch(`${config.API_ENDPOINT}/services/service/${serviceId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },

    getServiceReviews(serviceId) {
        return fetch(`${config.API_ENDPOINT}/reviews/${serviceId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },

    postService(service) {
        return fetch(`${config.API_ENDPOINT}/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(service)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )

    },

    updateService(serviceId, updatedService) {
        return fetch(`${config.API_ENDPOINT}/services/service/${serviceId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedService)
        })
    },

    deleteService(serviceId) {
        return fetch(`${config.API_ENDPOINT}/services/service/${serviceId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    },

    postReview(review) {
        return fetch(`${config.API_ENDPOINT}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(review)
        })
            .then(res =>
                    (!res.ok)
                        ? res.json(e => Promise.reject(e))
                        : res.json()
                )
    },

    deleteReview(serviceId, reviewId) {
        return fetch(`${config.API_ENDPOINT}/reviews/${serviceId}/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}

export default ServicesApiService;