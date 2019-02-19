import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TripDetails from './components/trips/TripDetails';
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import CreateTrip from './components/trips/CreateTrip';
import Profile from './components/profile/Profile';

//styles
import styles from './styles/main.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path='/'  component={Dashboard} />
             <Route path='/trip/:id'component={TripDetails} />
             <Route path='/create'  component={CreateTrip}/>
             <Route path='/profile' component={Profile}/>
             <Route path='/signin'  component={SignIn} />
             <Route path='/signup'  component={SignUp} />
          </Switch>
         
        </div>
      </HashRouter>
    );
  }
}

export default App;