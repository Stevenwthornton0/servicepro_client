import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import ServicesContext from '../../contexts/ServicesContext';
import './Header.css';

class Header extends Component {

    static contextType = ServicesContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location.reload()
    }

    renderMenu () {
        const { open } = this.context;
        if (open) {
            return (
                <div className='menu'>
                    <Link to='/provider/registration'>Provider Registration</Link>
                    <Link
                        onClick={this.handleLogoutClick}
                        to={'/'}
                    >
                        Logout
                    </Link>
                </div>
            )
        }
    }

    renderHam () {
        return (
            <div className='burger mobile' onClick={e => this.context.setOpen(e)}> 
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    renderLogoutLink() {
        return (
            <div className='header_logged-in computer'>
                <Link to='/provider/registration'>
                    <p>Provider Registration</p>
                </Link>   

                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    <p>Logout</p>
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <Link to={'/login'} className='header_logged-out'>
                <p>Login</p>
            </Link>
        ) 
    }

    nonUserLogo() {
        return (
            <Link to={'/'} className='logo_container'>
                <h1 className='logo1'>Service</h1>
                <h1 className='logo2'>PRO</h1>
            </Link>
        )
    }

    userLogo() {
        return (
            <Link to={'/services'} className='logo_container'>
                <h1 className='logo1'>Service</h1>
                <h1 className='logo2'>PRO</h1>
            </Link>
        )
    }

    render() {
        return (
            <div className='header'>
                <nav className='header_container'>
                    {TokenService.hasAuthToken()
                        ? this.userLogo()
                        : this.nonUserLogo()}

                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}

                    {TokenService.hasAuthToken()
                        ? this.renderHam()
                        : null}
                        
                    {this.renderMenu()}
                </nav>
            </div>
        )
    }
}

export default Header;