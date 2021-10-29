import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase/config';
import { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'
import Banner from './components/banner';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Banner/>
            <Login/>
          </Route>
            <Route path="/signin">
              <Banner/>
              <Register/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
        </Switch> 
    </Router>
  );
}

export default App;
