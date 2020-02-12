import React, { Component } from 'react';
import ServicesService from '../../services/services-api-service';
import ServicesContext from '../../contexts/ServicesContext';
import './ReviewForm.css'

export default class ReviewForm extends Component {
    static contextType = ServicesContext;

    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    static defaultProps = {
        service: [],
        addReview: () => {},
    }

    handleSubmit = ev => {
        ev.preventDefault();
        
        const { service } = this.context;
        const { rating, text } = ev.target
        ServicesService.postReview({
            service_id: service.id,
            rating: rating.value,
            text: text.value
        })
            .then(this.context.addReview)
            .then(() => {
                text.value = ''
            })
            .catch(this.context.setError)

    }

    render() {
        return (
            <div className='review'>
                <h3>Post a Review</h3>
                <form
                    className='ReviewForm'
                    onSubmit={this.handleSubmit}
                >
                    <label>Rating</label>
                    <select id='rating' className='rating'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                    <label>Review</label>
                    <textarea
                        required
                        aria-label='Leave a review...'
                        className='reviewText'
                        id='text'
                        cols='30'
                        rows='4'
                        placeholder='Leave a review..'
                    ></textarea>

                    <button className='reviewPost' type='submit'>
                        Post
                    </button>

                </form>
            </div>
        )
    }
}