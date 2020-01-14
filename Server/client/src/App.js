import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Our Pages here

// import LoginPage from './pages/LoginPage';
 import SignUp from './pages/SignUp';
// import LandingPage from './pages/LandingPage';
// import ViewPage from './pages/ViewPage'; */

import LoginPage from './pages/LoginPage';
/* import ResetpasswordPage from './pages/ResetpasswordPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import ViewPage from './pages/ViewPage'; */


// Default CSS
import './App.css';

// import react boostrap library
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>

        <Switch>

          {/* <Route exact path="/Login" component={LoginPage} /> */}
           <Route exact path="/SignUp" component={SignUp} />
          {/* <Route exact path="/Landing" component={LandingPage} />
          <Route exact path="/View" component={ViewPage} />  */}

          <Route exact path="/Login" component={LoginPage} />
          {/*<Route exact path="/Resetpassword" component={ResetpasswordPage} />
           <Route exact path="/Signup" component={SignupPage} />
          <Route exact path="/Landing" component={LandingPage} />
          <Route exact path="/View" component={ViewPage} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
