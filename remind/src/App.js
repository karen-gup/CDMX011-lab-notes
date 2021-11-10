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
import WallNotes from './components/wallNotes'
import {Banner} from './components/banner';

function App() {
  const [user, setUser] = useState({});
        useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
              setUser({email: user.email})
            }
        })
    }, [])
    // console.log(user)
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Banner/>
            <Login setUser={setUser}/>
          </Route>
            <Route path="/signin">
              <Banner/>
              <Register/>
            </Route>
            <Route path="/wallNotes">
              <WallNotes user={user}/>
            </Route>
        </Switch> 
    </Router>
  );
}

export default App;
