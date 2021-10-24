import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Banner from './components/banner'
import Login from './components/login';
import SignIn from './components/signIn';


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
            <SignIn/>
          </Route>
        </Switch> 
    </Router>
  );
}

export default App;
