import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Composants/Home';
import Register from './Composants/Register';
import Login from './Composants/Login';
function App() {
  return (
    <Router>
      <div className="navbar  text-white">
        <h1>
          {' '}
          <strong>Movies</strong> Films{' '}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
