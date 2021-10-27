import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Banner from './components/banner';
import Login from './components/login';
import Register from './components/register';


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
              <Banner/>
            </Route>
        </Switch> 
    </Router>
  );
}

export default App;
