import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home'

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/signin">
                <p>sign in page</p>
            </Route>
            <Route path="/signup">
                <p>sign up page</p>
            </Route>
            <Route path="/browse">
                <p>browse page</p>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
}


export default App;
