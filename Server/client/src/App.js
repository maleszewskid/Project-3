import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Jumbotron from '../src/components/Jumbotron';
// Import Our Pages here

import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
// import ResetpasswordPage from './pages/ResetpasswordPage';
import LandingPage from './pages/LandingPage';
import DataEntryPage from './pages/DataEntryPage';
import SubmitPage from './pages/SubmitPage'
// import ViewPage from './pages/ViewPage'; */
import ViewData from './pages/ViewData';

// Default CSS
import './App.css';

// import react boostrap library
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Landing" component={LandingPage} />
          <Route exact path="/DataEntry" component={DataEntryPage} />
          <Route exact path="/Signup" component={Signup} /> 
          {/* 
          <Route exact path="/Resetpassword" component={ResetpasswordPage} /> */}
          <Route exact path='/viewData' component={ViewData} />
          <Route exact path='/submit' component={SubmitPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
