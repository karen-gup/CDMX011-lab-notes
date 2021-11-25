import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
// import { auth } from './firebase/config';
// import { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/register';
import WallNotes from './components/WallNotes'
import PrivateRoute from "./components/privateRoute";
import { NoFound } from "./components/error404";
import './App.css';



function App() {
  
  // const [user, setUser] = useState({});
  
  //   useEffect(() => {
  //       auth.onAuthStateChanged(user => {
  //           if(user) {
  //             setUser({email: user.email})
  //           } 
  //       })
  //   }, [])
  //console.log("User",user)
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signin" component={Register} />
    <Route exact path="/wallNotes" component={WallNotes}/>
    <Route component={NoFound}/>
    </Switch> 
    </Router>

    // <Router>
    //     <Switch>
    //       <Route path="/" exact>
    //         <Login/>
    //       </Route>
    //         <Route path="/signin">
    //           <Register/>
    //         </Route>
    //         <Route path="/wallNotes">
    //           <WallNotes/>
    //         </Route>
    //         <Route>
    //           <NoFound/>
    //         </Route>
    //     </Switch> 
    // </Router>
  );
}

export default App;
