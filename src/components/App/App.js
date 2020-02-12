import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateOnlyRoute from '../../Utils/PrivateOnlyRoute';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';
import ProviderRegistration from '../../Routes/ProviderRegistration/ProviderRegistration';
import HomePage from '../../Routes/HomePage/HomePage';
import Services from '../../Routes/Services/Services';
import ServiceList from '../../Routes/ServiceList/ServiceList';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import ServicePage from '../../Routes/ServicePage/ServicePage';
import EditPage from '../../Routes/EditPage/EditPage';
import UserRegistration from '../../Routes/UserRegistration/UserRegistration';
import './App.css';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        
        <header className='header'>
          <Header />
        </header>

        <main className='App_main'>
          <Switch>

            <Route 
              exact
              path={'/'}
              component={HomePage}
            />

            <PrivateOnlyRoute
              path={'/provider/registration'}
              component={ProviderRegistration}
            />

            <PrivateOnlyRoute
              exact
              path={'/services'}
              component={Services}
            />

            <PrivateOnlyRoute
              exact
              path={'/services/:serviceType'}
              component={ServiceList}
            />

            <PrivateOnlyRoute 
              exact
              path={'/services/service/:serviceId'}
              component={ServicePage}
            />

            <PrivateOnlyRoute 
              exact
              path={'/services/service/:serviceId/edit'}
              component={EditPage}
            />

            <PublicOnlyRoute 
              exact
              path={'/register'}
              component={UserRegistration}
            />

            <PublicOnlyRoute 
              path={'/login'}
              component={LoginPage}
            />

          </Switch>
        </main>

      </div>
    )
  }
}

export default App;