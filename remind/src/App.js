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

  const [user, setUser] = useState({});
  useEffect(() => {
  auth.onAuthStateChanged(user => {
      if(user?.uid) {
          setUser({uid: user.uid})
      } 
  })
}, [])


  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Banner/>
            <Login user={setUser}/>
          </Route>
            <Route path="/signin">
              <Banner/>
              <Register user={user}/>
            </Route>
            <Route path="/home">
              <Banner/>
              <Home user={user}/>
            </Route>
        </Switch> 
    </Router>
  );
}

export default App;
