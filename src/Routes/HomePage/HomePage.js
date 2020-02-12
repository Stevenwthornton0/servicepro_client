import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Registration from '../../components/Registration/Registration';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServicesContext from '../../contexts/ServicesContext';

class HomePage extends Component {

    static contextType = ServicesContext;

    handleRegistrationSuccess = user => {
        const { history } = this.props;
        history.push('/login')
    }

    componentDidMount() {
        const { open } = this.context;
        if (open === true) {
            this.context.setOpen()
        }
    }

    render() {
        return (
            <div className='homePage'>
                <div className='homePage-left'>
                    <div className='infoContainer'>
                        <h2>Welcome to ServicePRO!</h2>
                        <h3>We provide an easy connection between those seeking a service, and Service Providers.</h3>
                    </div>

                    <div className='optionsContainer'>
                        <div>
                            <FontAwesomeIcon className='logo' icon='search'/>
                            <span>Find a Service Provider for anything you need</span>
                        </div>
                        <div>
                            <FontAwesomeIcon className='logo' icon='newspaper' />
                            <span>Leave a review for our Service Providers</span>
                        </div>
                        <div>
                            <FontAwesomeIcon className='logo' icon='user-plus' />
                            <span>Register your business as a Service Provider</span>
                        </div>
                    </div>

                    <div className='dunno'>
                        <Link to='/register' className='mobile buttonContainer'>
                            <button className='getStarted'>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='computer'>
                    <Registration 
                        onRegistrationSuccess={this.handleRegistrationSuccess}
                    />
                </div>
                
            </div>
        )
    }
}

export default HomePage;