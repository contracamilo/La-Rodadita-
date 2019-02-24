import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TripDetails from './components/trips/TripDetails';
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import CreateTrip from './components/trips/CreateTrip';
import Profile from './components/profile/Profile';
import Terms from './components/layout/terms';
import Faq from './components/layout/Faq';
//styles
import './styles/main.scss'
import Footer from './components/layout/Footer';
import Whoami from './components/layout/Whoami';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header>
             <Navbar />
          </header>
          <Switch>
             <Route exact path='/'  component={Dashboard} />
             <Route path='/trip/:id'component={TripDetails} />
             <Route path='/create'  component={CreateTrip}/>
             <Route path='/profile' component={Profile}/>
             <Route path='/signin'  component={SignIn} />
             <Route path='/signup'  component={SignUp} />
             <Route path='/terminos'  component={Terms} />
             <Route path='/faq'  component={Faq} />
             <Route path='/quienes_somos'  component={Whoami} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;