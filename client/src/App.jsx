import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import SymptomHistory from './components/SymptomHistory';

const App = () => {
  return (
    <Router>
       <Switch>
      <Route path="/" exact component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/symptom-history" component={SymptomHistory} />
      </Switch>
    </Router>
  );
};

export default App;