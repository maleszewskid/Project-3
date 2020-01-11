import React from 'react';
import './App.css';
import FirstTime from './pages/SignUp'
import Jumbotron from './components/Jumbotron'
// import '../src/signup'

function App() {
  return (
    <div className="App">
      <Jumbotron 
      />
      <FirstTime />
    </div>
  );
}

export default App;
