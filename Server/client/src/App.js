import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Jumbotron from '../src/components/Jumbotron';
// Import Our Pages here

import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import ResetpasswordPage from './pages/ResetpasswordPage';
import LandingPage from './pages/LandingPage';
import DataEntryPage from './pages/DataEntryPage';
import SubmitPage from './pages/SubmitPage'
import ViewData from './pages/ViewData';
//import Page from '../src/components/PDF/src/Pages/Page'

// Default CSS
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Landing" component={LandingPage} />
          <Route exact path="/DataEntry" component={DataEntryPage} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/Resetpassword" component={ResetpasswordPage} />
          <Route exact path='/viewData' component={ViewData} />
          <Route exact path='/submit' component={SubmitPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
