import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { auth } from './firebase/config';
// import { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/register';
import Notes from './components/notes'
import {Banner} from './components/banner';

function App() {
 /*  const [user, setUser] = useState({});
        useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
              setUser({email: user.email})
            } else {
              setUser({null:''})
            }
        })
    }, [])
    console.log(user) */
   // { email ? console.log('muestra /home') : console.log('regresa a /signin')}
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
            <Route path="/wallNotes">
              <Notes/>
            </Route>
        </Switch> 
    </Router>
  );
}

export default App;
