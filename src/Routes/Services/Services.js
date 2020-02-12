import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ServicesContext from '../../contexts/ServicesContext';
import './Services.css';

class Services extends Component {

    static contextType = ServicesContext;

    componentDidMount() {
        const { open } = this.context;
        if (open === true) {
            this.context.setOpen()
        }
    }

    render() {
        return (
            <div className='services'>
                <div className='serviceContainer1'>
                    <Link to={'/services/mechanic'}>
                        <FontAwesomeIcon className='logo car' icon='car' />
                        <p>Mechanic</p>
                    </Link>

                    <Link to={'/services/plumbing'}>
                        <FontAwesomeIcon className='logo toilet' icon='toilet' />
                        <p>Plumbing</p>
                    </Link>

                    <Link to={'/services/remodling'}>
                        <FontAwesomeIcon className='logo home' icon='home' />
                        <p>Home Remodel</p>
                    </Link>

                    <Link to={'/services/lawnscaping'}>
                        <FontAwesomeIcon className='logo mountain' icon='mountain' />
                        <p>Lawnscaping</p>
                    </Link>
                </div>

                <div className='serviceContainer2'>
                    <Link to={'/services/travel'}>
                        <FontAwesomeIcon className='logo plane' icon='plane' />
                        <p>Travel</p>
                    </Link>

                    <Link to={'/services/hair'}>
                        <FontAwesomeIcon className='logo cut' icon='cut' />
                        <p>Hair Stylist</p>
                    </Link>

                    <Link to={'/services/jobs'}>
                        <FontAwesomeIcon className='logo coins' icon='coins' />
                        <p>Employment</p>
                    </Link>

                    <Link to={'/services/phone'}>
                        <FontAwesomeIcon className='logo mobile' icon='mobile' />
                        <p>Phone Repair</p>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Services;