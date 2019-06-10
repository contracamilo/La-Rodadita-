import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TripDetails from './components/trips/TripDetails';
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import CreateTrip from './components/trips/CreateTrip';
import Profile from './components/profile/Profile';
import Terms from './components/layout/secondary_pages/Terms';
import Faq from './components/layout/secondary_pages/Faq';
import EditTrip from './components/trips/EditTrip';
//styles
import './styles/main.scss'
import Footer from './components/layout/Footer';
import Whoami from './components/layout/secondary_pages/Whoami';

import Contact from './components/layout/secondary_pages/Contact';
import News from './components/layout/secondary_pages/News';
import PrivacyPolicy from './components/layout/secondary_pages/PrivacyPolicy';







class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header>
             <Navbar />
          </header>
          <div className="content">
            <Switch>
              <Route exact path='/'    component={Dashboard} />
              <Route path='/trip/:id'  component={TripDetails} />
              <Route path='/create'    component={CreateTrip}/>
              <Route path='/profile'   component={Profile}/>
              <Route path='/signin'    component={SignIn} />
              <Route path='/signup'    component={SignUp} />
              <Route path='/terminos'  component={Terms} />
              <Route path='/contact'  component={Contact}/>
              <Route path='/news'     component={News}/>
              <Route path='/faq'      component={Faq} />
              <Route path='/:id/edit' component={EditTrip} /> 
              <Route path='/quienes_somos'  component={Whoami} />
              <Route path='/privacy-policy' component={PrivacyPolicy}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;