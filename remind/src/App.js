import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import WallNotes from './components/WallNotes'
import PrivateRoute from "./components/privateRoute";
import { NoFound } from "./components/error404";
import './App.css';



function App() {

  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signin" component={Register} />
    <PrivateRoute exact path="/wallNotes" component={WallNotes}/>
    <Route component={NoFound}/>
    </Switch> 
    </Router>
  );
}

export default App;
