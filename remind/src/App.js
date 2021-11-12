import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { auth } from './firebase/config';
import { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/register';
import PrivateRoute from "./components/privateRoute";
import WallNotes from './components/wallNotes'
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
  //  console.log("CurretUser", auth.currentUser)
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
            <PrivateRoute path="/wallNotes">
              <WallNotes user={user}/>
            </PrivateRoute>
        </Switch> 
    </Router>
  );
}

export default App;
