import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/browse">
                <p>sign in page</p>
            </Route>
            <Route path="/signin">
                <p>sign up page</p>
            </Route>
            <Route path="/browse">
                <p>browse page</p>
            </Route>
            <Route path="/">
                <p>main default</p>
            </Route>
        </Switch>
    </Router>
  );
}


export default App;
