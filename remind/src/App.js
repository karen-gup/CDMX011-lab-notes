import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import { auth } from './firebase/config';
import { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/register';
import WallNotes from './components/WallNotes'
import { NoFound } from "./components/error404";
import './App.css';



function App() {
  
  const [user, setUser] = useState({});
  
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
              setUser({email: user.email})
            } 
        })
    }, [])
  //console.log("User",user)
  return (
    // <Router>
    // <Switch>
    // <Route exact path="/" component={logIn} />
    // <Route path="/signin" component={Register} />
    //   <PrivateRoute path="/wallNotes" component={WallNotes}/>
    //         </Switch> 
    // </Router>

    <Router>
        <Switch>
          <Route path="/" exact>
            <Login setUser={setUser}/>
          </Route>
            <Route path="/signin">
              <Register/>
            </Route>
            <Route path="/wallNotes">
              <WallNotes user={user}/>
            </Route>
            <Route>
              <NoFound/>
            </Route>
        </Switch> 
    </Router>
  );
}

export default App;
