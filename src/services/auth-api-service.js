import config from '../config';

const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
            .then(res => 
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },

    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },

    getUser(user_name) {
        return fetch(`${config.API_ENDPOINT}/users/${user_name}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => 
                (!res.ok)  
                    ? res.json().then(e => Promise.reject(e))  
                    : res.json()
            )
    }
}

export default AuthApiService;